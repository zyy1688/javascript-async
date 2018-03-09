const fs = require('fs')
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

const readFileAsync = async

function () {
    const data1 = await
    readFilePromise('data/data1.json')
    console.log(data1.name)
    const data2 = await
    readFilePromise('data/data2.json')
    console.log(data2.name)
    const data3 = await
    readFilePromise('data/data3.json')
    console.log(data3.name)
    const data4 = await
    readFilePromise('data/data4.json')
    console.log(data4.name)
}

readFileAsync()