const Router = require('..//framework/Router')

const router = new Router()

const usersArr = [
    {id: 1, name:'Ulbi TV'},
    {id:34 , name: 'Korhunov Nick'},
]

router.get('/users',(req,res)=>{
    res.writeHead(200,{
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(usersArr))
})
router.post('/users',(req,res)=>{
    res.writeHead(200,{
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(usersArr))
})


module.exports = router