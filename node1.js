const http = require('http')
const server = http.createServer((req,res) => {
    
    res.setHeader('content-type','application/json')
    if(req.url === '/user' )
    res.end('welcome')
    else if(req.url === '/order' )
    res.end('this is order page')
    console.log(request.url)
});
server.listen(3000,'127.0.0.1');
