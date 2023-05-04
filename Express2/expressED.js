const express = require('express')
const  router  = require('./route')
const app = express()
const PORT = process.env.PORT ?? 8000


// Статическая папка express.static() - используется чтобы заключить стандартные запросы по-странично в одну папку
// чтобы попасть на них в  теге <a></a> href = "/name.html"
app.use(express.static(__dirname+'/'+'static'))

app.get('/download/img',(req,res)=>{
    res.download('./tiger.png') // скачивание
})

app.listen(PORT,()=>{
    console.log(`Server has been work at http://localhost:${PORT}`)
})