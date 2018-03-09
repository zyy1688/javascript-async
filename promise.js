const fs = require('fs')
const path = require('path')
const readFilePromise = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data))
            }
        })
    })
}

readFilePromise('data/data1.json').then(data => {
    console.log(data.name)
    return readFilePromise('data/data2.json')
}).then(data => {
    console.log(data.name)
    return readFilePromise('data/data3.json')
}).then(data => {
    console.log(data.name)
    return readFilePromise('data/data4.json')
}).then(data=>{
    console.log(data.name)
})