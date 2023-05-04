const fs = require('fs')
const path = require('path')

void (async ()=>{
    try{
    await fs.promises.mkdir('dir')

    for (let i = 1 ; i <= 5; i++){
        await fs.promises.writeFile(path.join(__dirname,'dir',`${i}.txt`),String(i))
    }
    let files = await fs.promises.readdir('dir')

    let res = await Promise.all(files.map(e => fs.promises.readFile(path.join(__dirname,'dir',e),'utf-8')))
    console.log(res)
    
    /*let res = []
    await files.forEach(e=> res.push(fs.promises.readFile(path.join(__dirname,'dir',e),'utf-8')))
    console.log(await Promise.all(res)) */

    fs.promises.rm('dir', { recursive: true, force: true })
    }catch(e){
        console.log(e.message)
    }
}) ()