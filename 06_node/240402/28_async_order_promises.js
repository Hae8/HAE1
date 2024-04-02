const fs = require('fs').promises;

console.log('시작');

fs.readFile('./readme2.txt', 'utf-8')
    .then ((data) => {
        console.log('1번', data);
        return fs.readFile('./readme2.txt', 'utf-8');
    })
    .then ((data) => {
        console.log('2번', data);
        return fs.readFile('./readme2.txt', 'utf-8');
    })
    .then ((data) => {
        console.log('3번', data);
        return fs.readFile('./readme2.txt', 'utf-8');
    })
    .catch((err) => {
        console.error(err);
    })

console.log('끝');
// 비동기 & 동시 수행 & 프로미스 방식