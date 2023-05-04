const {EventEmitter,errorMonitor} = require('events')
const emitter = new EventEmitter() // создаем объект, который может прослушивать события

// вешаем обработчик события - функцию которая что-то делает
emitter.on('event',data=>{
    console.log(data)
})
// запускаем событие и передаем аргументы : название событие и данные(усли необходимо)
emitter.emit('event',25)

// краткая запись
emitter.on('event2',(data)=>console.log(data)).emit('event2',26)


// событие будет запущено единожды 
let m = 0
emitter.once('once',()=>console.log(++m))
emitter.emit('once') // выводит 1
emitter.emit('once') // проигнорировано


// отлов ошибок с помощью объекта errorMonitor
// emitter.on(errorMonitor, (err) => {
//   console.log(err);
// });
// emitter.emit('error', new Error('whoops!'))

// реализация через свой class
class MyEmitter extends EventEmitter{
    subscribe(eventName,callback){
        console.log('[Subscribing...]')
        this.on(eventName,callback)
    }
    dispatch(eventName,callback){
        console.log('[Dispathcing...]')
        this.emit(eventName,callback)
    }
}
let newEmitter = new MyEmitter()

newEmitter.subscribe('userEvent',()=>console.log(2+2))
newEmitter.dispatch('userEvent')

