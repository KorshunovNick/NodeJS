// let modul = require('./export') // если импортируемых сущностей много, то можно импортнуть один объект и оьращаться к нему
let { add, minus, mult, Export } = require('./export')
let clone = new Export('Nick', 23)

console.log(add(5, 7))
console.log(minus(25, 9))
console.log(mult(2, 3))

clone.name = 'Jack'
clone.age = 23
console.log(clone)
