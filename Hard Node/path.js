// стандартный модуль path для работы с путями
const path = require('path')
let spc = () => console.log('')
let result = path.join('first', 'second')

spc()
console.log('Склеить участки пути path.join("first","second"): ' + result)
spc()
console.log('__dirname - Абсолютный путь к текущей директории : ' + __dirname)
spc()
console.log('".." в path.join(__dirname,"..") - означает вернуться наверх от нашей директории  :' + path.join(__dirname, '..'))
spc()
console.log('Абсолютный путь также можно получить через path.resolve() : ' + path.resolve())
spc()
let fullpath = path.join(__dirname, 'first')
let parse = path.parse(fullpath);
parse.toString = function () { return this };
console.log('Распарсить путь с помощью path.parse(path.resolve()) :' + parse)
spc()
console.log('Разделитель в OC - path.sep : ' + path.sep)
spc()
console.log('Проверка на абсолютный путь path.isAbsolute(__dirname) : ' + path.isAbsolute(__dirname))
spc()
console.log('Название файла path.basename(fullpath) : ' +
    path.basename(fullpath))
spc()
console.log('Название расширения path.extname(__dirname) : ' + path.extname(fullpath))
spc()
console.log('__filename : ' + __filename)

console.log('_____________________________________________________________')
spc()

const siteURL = 'http://localhost:8080/users?id=34'

let url = new URL(siteURL)

console.log(url) // объект url и его свойства
