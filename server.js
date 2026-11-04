const http = require('node:http');

function createHandler() {
  return (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'Hello from the mcp-demo Node.js API!' }));
      return;
    }

    if (req.method === 'GET' && req.url === '/health') {
      res.writeHead(200);
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  };
}

function createServer() {
  return http.createServer(createHandler());
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const server = createServer();

  server.listen(port, () => {
    console.log(`mcp-demo listening on http://localhost:${port}`);
  });
}

module.exports = { createServer };
