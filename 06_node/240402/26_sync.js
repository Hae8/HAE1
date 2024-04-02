const fs = require('fs');

console.log('시작');

let data = fs.readFileSync('./readme2.txt', 'utf-8')
console.log('1번', data);

data = fs.readFileSync('./readme2.txt', 'utf-8')
console.log('2번', data);

data = fs.readFileSync('./readme2.txt', 'utf-8')
console.log('3번', data);

console.log('끝');

// 동기방식으로 순서를 맞춰서 진행한다.