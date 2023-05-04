/* Всего 4 вида стримов 
Readable - только для чтения
Writable  - только для записи
Duplex - для чтения и записи Readable + Writable
Transform - такой же как Duplex, но может изменить данные по мере чтения
*/

const fs = require('fs')
const path = require('path')

let stream = fs.createReadStream(path.resolve(__dirname), (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})


// один chunk по дефолту 64кб
stream.on('data', (chunk) => {
    console.log(chunk)
}
)
// другие методы
// stream.on('open',()=> начали читать...)
// stream.on('pause',()=> на паузе )
// stream.on('end',()=> закончили читать...)
// stream.on('error',()=> error)

let writableStream = fs.createWriteStream(path.resolve(__dirname, 'writablestream.txt'),)

for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n')
}


// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

const http = require('http')
const { response } = require('express')

http.createServer((request, response) => {
    // request - readable stream
    // response - writable stream

    const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'))

    stream.pipe(response)
})