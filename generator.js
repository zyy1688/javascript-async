const fs = require('fs')
const co = require('co')
const readFilePromise = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
        if(err) {
            reject(err)
        } else {
            resolve(JSON.parse(data)
)
}
})
})
}

co(function* () {
    const data1 = yield readFilePromise('data/data1.json')
    console.log(data1.name)
    const data2 = yield readFilePromise('data/data2.json')
    console.log(data2.name)
    const data3 = yield readFilePromise('data/data3.json')
    console.log(data3.name)
    const data4 = yield readFilePromise('data/data4.json')
    console.log(data4.name)
})