app.get('/',(request,response)=>{
    const kindsReq = [
    request.path,   // путь
    request.query,  // строка запроса
    request.originalUrl, // url
    request.params, // параметры запроса
    request.protocol, // протокол http,https,ws и тд
    request.secure, // true если https
    request.acceptsLanguages, // разрешенные языка
    request.ip // ip отправителя запроса
    ]
    
    console.log(kindsReq)
})


// динамические /:параметры запроса
router.get('/:dynamic',(req,res)=>{
    switch(req.params.dynamic){
    case 'json':    
        let obj = {
            name: 'Nick',
            age: 23,
            job: 'developer'
        }

        res.type('json')
        res.send(JSON.stringify(obj))
            break;

    case 'html':
        res.type('html')
        res.send(
        `<div>
            <p>Text1</p>
            <p>Text2</p>
            <p>Text3</p>
        </div>`
        )
            break;

    case 'list':
        res.type('html')

        let arr = ['a','b','c','d']

        let resultList = '<ol>'
        arr.forEach(e=>resultList+=`<li>${e}</li>`)
        resultList+=`</ol>`

        res.send(resultList)
            break;
    }
})
