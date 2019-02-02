do not tell me i cannot chain `forEach` 


```js
const log = v => console.log(v)

const f = [1,2,3].map(n => n*2).effectMap(log)

console.log(f)
```

```js
2
4
6
[ 2, 4, 6 ]

```