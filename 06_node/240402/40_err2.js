/*
const fs = require('fs');

fs. readFile('./nofile.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
*/

// 프로미스 방식
const fs = require('fs').promises;

fs. readFile('./nofile.txt', 'utf8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err)
    })
