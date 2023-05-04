const http = require('http')
const fs = require('fs')

// создаем сервер, который принимает колбэк с 2 параметрами
// request и response (req,res) = запрос и ответ
let server = http.createServer((request,response)=>{
    // ответ
    response .writeHead(200,{'Content-Type':'text/html; charset=utf-8'}) // прописываем заголовки: статус и заголовки
    // (пример Content-Type: Если html-страница то будет text/html ) 
    
    // отслеживаем запросы через req.url = читаем и выводим нужные html страницы
    if (request.url == '/'){ 
    // читаем файл как стрим
        fs.createReadStream('server htmls/server.html').pipe(response) // как только прочитали кусочек pipe(), отрендерили
    } else if (request.url == '/friends'){
        fs.createReadStream('server htmls/friends.html').pipe(response)
    } else {
        fs.createReadStream('server htmls/error.html').pipe(response)
    }
})


const PORT = 3000
const HOST = 'localhost' // 127.0.0

// запускаем сервер указав ПОРТ и ХОСТ
// а также колбек который будет исполняться после запуска
server.listen(PORT,HOST,()=>{
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})