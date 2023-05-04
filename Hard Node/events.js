const Emitter = require('events')

let emitter = new Emitter()


// вешаем на эмитер обработчик события 'message' через on,
// где вторым параметром передаем колбек с неограниченным кол-м аргументов

let callback = (data,second) => {
    console.log(`You send message : ${data}`)
    console.log(`You send second message : ${second}`)
}

emitter.on('message',callback)  // как addEventListener()

emitter.removeAllListeners() // удалить все обработчики
emitter.removeListener('message', callback)  // удалить конкретный обработчик с теми же данными(тем же callback-ом)


const MESSAGE = process.env.message || ''

// создаем это событие через .emit()
if (MESSAGE){
    emitter.emit('message',MESSAGE,'boy')
} else {
    emitter.emit('message','Yu are dont send the message')
}