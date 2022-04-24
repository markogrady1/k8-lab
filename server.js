const http = require('http');
const pino = require('pino')();

const PORT = process.env.PORT || 3333;

http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/htmlapplication/json'
  });
  const url = req.url;
  if (url === '/healthcheck') {
    res.write(JSON.stringify({
      status: 'OK',
      time: new Date().toISOString()
    }));
    pino.info('Healthcheck');
    res.end();
  } else if (url === '/contact') {
    res.write(JSON.stringify({ status: 'OK', success: true, message: 'Contact' }));
    pino.info('Contact');
    res.end();
  } else if (url === '/about') {
    res.write(JSON.stringify({ status: 'OK', success: true, message: 'About' }));
    pino.info('About');
    res.end();
  } else if (url === '/') {
    res.write(JSON.stringify({ status: 'OK', success: true, message: 'Hello Universe' }));
    pino.info('Hello Universe');
    res.end();
  }
}).listen(PORT, function() {
  pino.info(`server listening at : http://localhost:${PORT}`);
});