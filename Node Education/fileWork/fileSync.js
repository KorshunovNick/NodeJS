let fs = require('fs')

fs.open('test.txt', 'w', (err) => { // создали с флагом 'w'-writable ('r' - readable)
    if (err) throw err;
    console.log('Test created')
})

fs.writeFileSync('test.txt', '123456', (err) => { // записали туда строку цифр или что угодно
    if (err) throw err;
    console.log('Data has been added')
})

fs.readFile('test.txt', 'utf-8', (err, data) => { // читаем файл и делаем всякое с его данными
    if (err) throw err;

    let arr = data.split('').map(Number)
    console.log(`
    Array: ${arr}
    Sum: ${arr.reduce((ac, e) => ac + e, 0)}
    Multy: ${arr.reduce((ac, e) => ac * e, 1)}`)
})

fs.unlink('test.txt', (err) => { // помотросили и удалили
    if (err) throw err;
    console.log('File deleted')
})

// засунем все в функции
function createFile(name, flag) {
    fs.open(name, flag, (err) => {
        if (err) throw err;
        console.log(`File ${name} with flag '${flag}' created`)
    })
}

function writeFile(name, data) {
    fs.writeFile(name, data, (err) => {
        if (err) throw err;
        console.log('Data has been added')
    })
}

function readFile(name, encoding = 'utf-8') {
    let result = fs.readFile(name, encoding, (err, data) => {
        if (err) throw err;
        return data
    })
    return result
}

function deleteFile(name) {
    fs.unlink(name, (err) => {
        if (err) throw err;
        console.log('File deleted')
    })
}