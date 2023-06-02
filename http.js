const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to my page");
    }
    if(req.url === '/about'){
        res.end('here is my about page');
    }
res.end('<h1>Oops!</h1>');
})

server.listen(5000);