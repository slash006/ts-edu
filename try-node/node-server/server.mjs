import http from 'http';
const port = process.env.PORT || 8000;


const server = http.createServer((req, res) => {

    console.debug('method: ', req.method);

    if(req.url === '/c' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {

            body.push(chunk);
        })

        req.on('end', () => {

            const params = Buffer.concat(body)
            res.end("response: " + params.toString())
        })

    }

    else {

        console.debug('req', req.url);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('hisss');
    }
})

server.listen(port);
