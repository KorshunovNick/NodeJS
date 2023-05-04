const http = require('http')
const EventEmitter = require('events')

module.exports = class Application {
    constructor() {
    this.emitter = new EventEmitter()
    this.server = this._createServer()
    }
    listen(port,callback){
        this.server.listen(port,callback)
    }

    addRouter(router){
Object.keys(router.endpoint).forEach((path)=>{
    const endpoint = router.endpoint[path]
    Object.keys(endpoint).forEach((method)=>{
        const handler = endpoint[method]
        endpoint[method] = handler
        this.emitter.on(this._getRouterMask(path,method),(req,res)=>{
            handler(req,res)
        })
    })
})

    }
    _createServer(){
        return http.createServer((req,res)=>{
            const emitted = this.emitter.emit(this._getRouterMask(req.url,req.method),req,res)
            if (!emitted){
                res.end(req.url)
            }
        })
    }

    _getRouterMask(path,method){
        return `[${path}]:[${method}]`
    }
}