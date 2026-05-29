import http from 'http';
const port = process.env.PORT || 8000;


const server = http.createServer((req, res) => {
    console.debug('req', req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hi');
})

server.listen(port);
