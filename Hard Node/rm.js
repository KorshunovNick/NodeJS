let fs = require('fs')
let path = require('path')

fs.rm(path.resolve(__dirname, 'writablestream.txt'), (err) => {
    return (err) ? console.log(err) : console.log('file delted...')
})