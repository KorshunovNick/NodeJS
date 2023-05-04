// работа с ОС 
// модуль cluster предназначен,чтобы однопоточные js приложения использовали всю мощность многоядерных систем
let os = require('os')
let cluster = require('cluster')
/* os.platform() - платформа разработки windows,macOs,android etc
os.arch()
os.cpus() - информация о процессоре - массив с данными о каждом ядре


// */
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)

if (cluster.isMaster){
    for (let i=0;i < os.cpus().length - 8 ; i++){
        cluster.fork()
    }
    cluster.on('exit',(worker)=>{
        console.log(`Worker with pid ${worker.process.pid} is dead...`)
        cluster.fork()
    })
} else {
    console.log(`worker with pid : ${process.pid} is enter`)
    setInterval(()=>{
        console.log(`Worket with pid ${process.pid} is also work`)
    },5000)
}


