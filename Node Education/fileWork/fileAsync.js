const fs = require('fs')

const name = 'test.txt'
void (async () => {
    try {
        await fs.promises.writeFile(name, '12345')
        console.log('File created')

        await fs.promises.appendFile(name, '6789')
        console.log('Data added')

        let data = await fs.promises.readFile(name, 'utf-8')
        let numbers = data
            .split('')
            .map(Number)

        let result = [
            ` Array : [${numbers}]`,
            ` Sum : ${numbers.reduce((ac, e) => ac + e, 0)} `,
            ` Multy : ${numbers.reduce((ac, e) => ac * e, 1)} `
        ]
        console.log(result.join('\n'))

        await fs.promises.unlink(name)
        console.log('File deleted')

    } catch (e) {

        console.log(e.message)

    }

})()
