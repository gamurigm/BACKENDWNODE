const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.statusCode = 200;
    

    res.end('Hello world');
})

server.listen(8000);
console.log('Servidor en la url http://localhost:8000')