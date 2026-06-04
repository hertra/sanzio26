import server from './dist/server/server.js';
import { NodeRequest } from 'srvx/node';

async function test() {
  const req = new NodeRequest({
    req: {
      url: '/',
      method: 'GET',
      headers: { host: 'localhost' },
      rawHeaders: [],
      socket: { encrypted: false, localAddress: '127.0.0.1', localPort: 80 }
    },
    res: {
      once: () => {},
      on: () => {},
      emit: () => {},
      setHeader: () => {},
      getHeader: () => {},
      getHeaders: () => ({}),
      end: () => {}
    }
  });

  try {
    const res = await server.fetch(req);
    console.log('Status:', res.status);
    const text = await res.text();
    console.log('HTML Length:', text.length);
    const cssMatch = text.match(/href="([^"]+\.css)"/);
    console.log('CSS Link:', cssMatch ? cssMatch[1] : 'NOT FOUND');
    // console.log(text.slice(0, 1000));
  } catch (e) {
    console.error(e);
  }
}

test();
