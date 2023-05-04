const fs = require('fs')
const path = require('path')

void (async () => {
    try {
        var dirName = 'MyFavoriteDir'

        await fs.promises.mkdir(dirName)  // создаем папку
        console.log(`Dir ${dirName} created`)

        let count = 0

        while (count <= 100) {   // заполняем НУЖНОЙ ИНФОРМАЦИЕЙ : числами от 0 до 100
            let ourPath = path.join(__dirname, dirName, `${count}.txt`) // наш путь __dirname до тек диектории -> наша папка -> файл
            await fs.promises.writeFile(ourPath, String(count)) // данные должны быть строкой
            count += 10
        }
        console.log(`Data in files added`)



        let files = await fs.promises.readdir(dirName) // readdir для чтения папки -> возвращает массив файлов
        console.log(files) // вот он

        let res = []

        /* можем использовать это почему нет
            let res = await Promise.all(files.map(async (e)=> await fs.promises.readFile(path.join(__dirname,dirName,e),'utf-8')))
            await files.forEach(async (e)=>await fs.promises.unlink(path.join(__dirname,dirName,e)))
        */
        for (file of files) {

            let pathFile = path.join(__dirname, dirName, file)

            res.push(await fs.promises.readFile(pathFile, 'utf-8'))

            await fs.promises.unlink(pathFile)  // чтобы удалить папку с файлами исп fs.promises.rm(dir,{ recursive: true, force: true })
        }



        console.log(res.sort((a, b) => a - b))
        console.log('All files deleted')

        await fs.promises.rmdir(dirName)   // удаление через rmdir 
        console.log(`Dir ${dirName} deleted`)

    } catch (e) {
        console.log(e.message)

    } finally {
        fs.promises.rm(path.join(__dirname, dirName), { recursive: true, force: true })
    }
})()
