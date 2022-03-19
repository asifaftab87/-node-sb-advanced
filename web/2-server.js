const server = require('http').createServer();
server.on('request', (req, res)=> {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('Hello world');
    setTimeout(function() {
        res.write('Another hello world');
    }, 1000);
    setTimeout(function() {
        res.write('Yet Another hello world');
    }, 2000);
    res.end();
})
server.listen(4242);