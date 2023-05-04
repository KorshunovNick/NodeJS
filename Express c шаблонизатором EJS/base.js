let express = require('express')

const app = express()

app.get('/',async (req,res)=>{ 
    res.send('This is HOME PAGE')
})


/* динамические параметры request.params
    req.params - объект
    динамические параметры мы указываем после двоеточия : 
    /root/:param1/:param2
    http://127.0.0.1:8080/root/Nick/34
    req.params.param1 - Nick
    req.params.param2 - 34
*/
app.get('/user/:name/:id',(req,res)=>{
    res.send(`
    Name : ${req.params.name}
    ID : ${req.params.id}`)
})

// отправка файла  * в аргументе sendFile должен быть абсолютный путь до файла
app.get('/hero',(req,res)=> {
    res.sendFile(__dirname+'/'+'index.html')
})

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Server is started at http://localhost:${PORT}`)
})