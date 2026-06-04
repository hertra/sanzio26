import server from '../dist/server/server.js';
import { NodeRequest, sendNodeResponse } from 'srvx/node';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function handler(req, res) {
  const { url } = req;
  
  // Clean the URL to prevent directory traversal
  const cleanUrl = url.split('?')[0].split('#')[0];
  
  // Skip if it's a known non-static path
  if (cleanUrl !== '/' && !cleanUrl.startsWith('/api/')) {
    try {
      const filePath = path.join(__dirname, '..', 'dist', 'client', cleanUrl);
      const stats = await fs.stat(filePath);
      
      if (stats.isFile()) {
        const content = await fs.readFile(filePath);
        const ext = path.extname(cleanUrl).toLowerCase();
        const contentType = {
          '.css': 'text/css',
          '.js': 'application/javascript',
          '.ico': 'image/x-icon',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.svg': 'image/svg+xml',
          '.webp': 'image/webp',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2',
          '.ttf': 'font/ttf'
        }[ext] || 'application/octet-stream';
        
        res.setHeader('Content-Type', contentType);
        // Add cache headers for assets
        if (cleanUrl.startsWith('/assets/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
        return res.status(200).end(content);
      }
    } catch (e) {
      // If it looks like a static file but wasn't found, return 404
      if (cleanUrl.includes('.') && !cleanUrl.startsWith('/api/')) {
        return res.status(404).end('Not Found');
      }
    }
  }

  try {
    const request = new NodeRequest({ req, res });
    const response = await server.fetch(request);
    return sendNodeResponse(res, response);
  } catch (error) {
    console.error('Error handling request:', error);
    if (!res.headersSent) {
      res.status(500).end('Internal Server Error');
    }
  }
}
