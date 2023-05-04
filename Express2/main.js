const express = require('express')
const  router  = require('./route')
const app = express()
const PORT = 8000
const { requestTime,logger } = require('./middleWare')


app.use(requestTime,logger)
app.get('/download/img',(req,res)=>{
    res.download('./tiger.png') // скачивание
})

app.use(express.static(__dirname+'/'+'static'))
app.use(router)
app.use(function(req, res) {
	res.status(404).send('not found');
});




app.listen(PORT,()=>{
    console.log(`Server has been work at http://localhost:${PORT}`)
})