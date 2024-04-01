/*
// 콜백 지옥
const fs = require('fs')
fs.readFile('./log.txt', (err, data) => {
    if (err) {
        console.log(err);
    console.log(data);
    }
    console.log(data);
    fs.writeFile('./new_log.txt', data, (err) => {
        if (err) {
            fs.writeFile('./error.txt', err, (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
});

const fs = require('fs').promises;

fs.readFile('./log.txt')
    .then ((data) => {
        return fs.writeFile('./new_log.txt', data)
    })
    .catch ((err) => {
        if (err) {
            fs.writeFile('./error.txt', err)
        }
    })

// 콜백 지옥을 해결하는 방법
// 1. promises 객체의 사용
// 2. async/await 사용

*/

const condition = true;

const getUser = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

getUser
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('종료');
    })

// 첫번쨰 함수의 결과에 따라
// 두번째 함수의 결과가 결정되기 때문에
// 콜백이 아닌 프로미스 방식을 사용하여
// 첫번째 함수가 끝나야 두번째 함수를 실행할 수 있다는 것을 명시