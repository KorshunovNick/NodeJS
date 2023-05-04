// Данные об операционной системе, кол-во процессоров, памяти, сама система, ip

const os = require('os');
let network = require('./network')

console.log('Платформа : windows,mac,linux : '+os.platform())

console.log('Архитектура процессора : ' + os.arch())

console.log(`Инфа о ${os.cpus().length} процессорах : `)
// for (let i of os.cpus()){
//     console.log(i)
// }

console.log('Свободная память : '+os.freemem())

console.log('Всего памяти : '+os.totalmem())


console.log('Базовая папка : '+os.homedir())

console.log('Хост : '+os.hostname())

console.log('Сколько работает система '+os.uptime()+' секунд')

console.log('Сетевой интрефейс ')
console.log(network.networkFlat(os.networkInterfaces()))

console.log(os.type())

console.log(os.userInfo())