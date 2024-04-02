const fs = require('fs')

console.log('시작');

fs.readFile('./readme2.txt', 'utf-8', (err,data) => {
    if (err) throw err;
    console.log('1번', data);
    fs.readFile('./readme2.txt', 'utf-8', (err,data) => {  // 콜백 안에 또 콜백
        if (err) throw err;
        console.log('2번', data);
        fs.readFile('./readme2.txt', 'utf-8', (err,data) => {  // 콜백 안에 또 콜백
            if (err) throw err;
            console.log('3번', data);
        }) // 이 함수 안쪽에서는 기다리며 차곡차곡 실행된다.
    })
}) // 전체적으로는 동시수행이 이뤄진다.

console.log('끝');
// 비동기 & 동시 수행