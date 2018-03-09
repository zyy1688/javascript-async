# javascript 异步编程

## 快速开始



#### callback方式
```js
fs.readFile('data/data1.json', (err, data) => {
    fs.readFile('data/data2.json', (err, data) => {
        fs.readFile('data/data3.json', (err, data) => {
            fs.readFile('data/data4.json', (err, data) => {

            })
        })
    })
})
```

#### promise方式

```js
readFilePromise('data/data1.json').then(data => {
    return readFilePromise('data/data2.json')
}).then(data => {
    return readFilePromise('data/data3.json')
}).then(data => {
    return readFilePromise('data/data4.json')
})
```

#### generator方式

```js
co(function* () {
    const r1 = yield readFilePromise('data/data1.json')
    const r2 = yield readFilePromise('data/data2.json')
    const r3 = yield readFilePromise('data/data3.json')
    const r4 = yield readFilePromise('data/data4.json')
})
```

#### async-await方式

```js
const readFileAsync = async function () {
    const f1 = await readFilePromise('ddata/data1.json')
    const f2 = await readFilePromise('data/data2.json')
    const f3 = await readFilePromise('data/data3.json')
    const f4 = await readFilePromise('data/data4.json')
}
```





