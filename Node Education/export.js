const add = (a,b) => a + b;

const minus = (a,b)=> a - b;

const multy = (x,y) => x * y**2

class Export{
    constructor(name,age){
        this._name = name
        this._age = age 
    }
    get name(){
        return this._name
    }
}
module.exports = {
    add : add,
    minus: minus,
    mult: multy,
    Export:Export
}

/* 
    module.exports - основная команда для экспорта 
    можем экспортировать функцию как module.exports.func

    module.export.func = уже существующая, либо пишем свое
    module.exports.func = (a,b)=>a+b

    В файле, куда импортируем эта функция будет методом объекта
    let объект  = require('./export')

    объект.func(10,10) // 20

    или через { десктруктуризацию } определяем нужные сущности
    const { функция, класс , переменная } = require('./export)

*/