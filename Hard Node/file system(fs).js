// стандартный модуль fs и path

const fs = require('fs')
const path = require('path')

// // fs.mkdirSync позволяет  создать папку

fs.mkdirSync(path.resolve(__dirname,'test1')) //создали папку "test" в нашей директории

// /* чтобы создать несколько папок - вторым аргументом мы указываем свойство объекта
//  recursive: true*/

 fs.mkdirSync(path.resolve(__dirname,'test1','test2','test3'),{recursive : true})

// /* также вторым аргументом мы можем
//  передать функцию callback с первым параметром ошибкой*/

 fs.mkdir(path.resolve(__dirname,'test'),(err)=>{
    if (err){
        console.log(err.name)
    } else {
        console.log('Папка создана')
    }
 })

//  /* удаление папки с помощью fs.rmdir() */

 fs.rmdir(path.resolve(__dirname,'test1'),(err)=>{
    if (err) throw err
 })

// для записи в файл используется fs.writeFile(путь, данные, колбек с первым аргументом - ошибкой)

 fs.writeFile(path.resolve(__dirname,'test.txt'),'строка с данными и тд',(err)=>{
    if (err) {
        throw err;
        return;
    }
    console.log('Файл записан')
 })

//  // fs.writeFile() - перезаписывает все содержимое
//  // чтобы добавить данные необходимо использовать fs.appendFile()

 fs.appendFile(path.resolve(__dirname,'test.txt'),'ЗАПИСАНО В КОНЕЦ!',(err)=>{
    if (err) {
        throw err;
        return;
    }
    console.log('Файл записан')
 })

 // Асинхронка может быть с помощью require('fs/promise')
 // но внизу мы перепишем синхронные wrieteFile и appendFile на асинхронные с помощью промисов

 let ourPath = path.resolve(__dirname,'test.txt')

 
 let writeFileAsync = async (path, data) =>{
    return new Promise((resolve,reject)=> fs.writeFile(path,data,(err)=>{
        if (err){
        reject(err);
        return;
        }
        resolve()

    }))
 }

 let appendFileAsync = async (path, data) =>{
    return new Promise((resolve,reject)=> fs.appendFile(path,data,(err)=>{
        if (err){
        reject(err);
        return;
        }
        resolve()

    }))
 }



 // чтение файла readFile со вторым аргументом объектом с фалагами, основной encoding - UTF-8
 // иначе придут буферные данные
 let readFileAsync = async (path) =>{
    return new Promise((resolve,reject)=> fs.readFile(path,{encoding:'utf-8'},(err,data)=>{
        if (err){
        reject(err);
        return;
        }
        resolve(data)

    }))
 }

// удаление fs.rm 

let removeFileAsync = async (path) =>{
    return new Promise((resolve,reject)=> fs.rm(path,(err,data)=>{
        if (err){
        reject(err);
        return;
        }
        resolve('file is deleted...')
    }))
 }

//  writeFileAsync(ourPath,'первый ')
//  .then(()=> appendFileAsync(ourPath,'второй '))
//  .then(()=> appendFileAsync(ourPath,'третий '))
//  .then(()=> appendFileAsync(ourPath,'пятый '))
//  .then(()=> readFileAsync(ourPath))
//  .then(data => console.log(data))
//  .catch((err) => console.log(err))
 
// removeFileAsync(ourPath).then(()=>console.log('file is deleted'))

let text = process.env.TEXT || ''

writeFileAsync(path.resolve(__dirname,'lesson.txt'),'hello epat privet sosed')
.then(()=> readFileAsync(path.resolve(__dirname,'lesson.txt')))
.then(data => data.split(' ').length)
.then((count)=> writeFileAsync(path.resolve(__dirname,'count worlds.txt'),`Count : ${count}`))
.catch(err => console.log(err))
.then(()=>removeFileAsync(path.resolve(__dirname,'lesson.txt'))
.then((res)=> console.log(res)))
.then(()=>removeFileAsync(path.resolve(__dirname,'count worlds.txt'))
.then((res)=> console.log(res)))


