const http = require('http')

const urls = {
    '/': 'Basic genereal main important page',
    '/hello': 'Hello visiter',
    '/bye' : 'Good bye my friend',
    '/bubles' : 'What?',
    error: 'Page not found'
}



http.createServer((req,res)=>{
    res.writeHeader(200,{"Content-Type":"text/plain;charset=utf-8"});
    if (req.url in urls){
        res.end(urls[req.url])
    } else {
        res.end(urls.error)
    }
    
}).listen(8000,'localhost',()=>console.log('server started'))

