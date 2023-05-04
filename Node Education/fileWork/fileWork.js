const fs = require('fs/promises');
const path = require('path');

const ourpath = 'C:\\Users\\Никита Коршунов\\Desktop\\Text.txt'

void (async ()=>{
    try{
        await fs.appendFile(ourpath,'\nИ с каждым днем я знаю все больше')

        let data = await fs.readFile(ourpath,'utf-8')
            console.log(`
            data : ${data}
            length : ${data.length}
            `)

    } catch(e){
        console.log(e.message)
    }
})()