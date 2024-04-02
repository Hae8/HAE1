const fs = require('fs');

console.log('시작');

fs.readFile('./readme2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('1번', data);
});
fs.readFile('./readme2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('2번', data);
});
fs.readFile('./readme2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('3번', data);
});

console.log('끝');

// 논블로킹 방식이기 때문에 파일을 읽는 순서는 매번 달라진다.