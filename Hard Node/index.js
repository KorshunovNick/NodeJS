const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')

const app = new Application()
console.log(process.env)



app.addRouter(userRouter)

app.listen(PORT,()=> console.log(`Server starting on PORT ${PORT}`))

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,
//         {'Content-type':'text/html;'})
//     res.end('<h1>Hello WORLD</h1>')
// })


// const server = http.createServer((req,res)=>{
//     res.writeHead(200,
//     {'Content-type':'application/json;'})
//     if (req.url === '/users'){
//         return res.end(JSON.stringify({
//             id: 1, name: 'KORSHUNOV NODE JS'
//         }))
//     }
//     if (req.url == '/posts'){
//         return res.end('A this is POSTS busters!')
//     }
//     res.end(req.url)
// })