/* Sample - шаблон 
    Здесь используем шаблонизаторы через app.set(name,sample) - template engine - шаблонизатор
    app.set - служит не только для шаблонизаторов - подробнее можно узнать в сети
    Все файлы используемы в шаблонизаторе должны иметь расширение этого шаблнизатора - в нашем случае ejs
    В отправке ответа используется метод render() в который передаем имя файла без расширений
*/

const express = require('express')
const PORT = 8000
const app = express()

app.set('view engine','ejs')

// использование статической папки через express.static
app.use(
    express.static('public')
)
// использование body-parser - обработка request.body
app.use(
    express.urlencoded({ extended : false})
)

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/user/:username',(req,res)=>{
    let data = {
        username: req.params.username ,
        hobbies: ['books','sport','programming']
    }

    res.render('user',data)
})

app.post('/check-user',(req,res)=>{
    let user = Object.assign(req.body,{hobbies: ['books','sport','programming']})
    if (!user){
        return res.redirect('/')
    }
    res.render('user',user)
})




app.listen(PORT,()=>{
    console.log(`Server is started at http://localhost:${PORT}`)
})