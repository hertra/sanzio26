import server from '../dist/server/server.js';
import { NodeRequest, sendNodeResponse } from 'srvx/node';

export default async function handler(req, res) {
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
