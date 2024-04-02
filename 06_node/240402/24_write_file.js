/* 콜백 지옥
const fs = require('fs');

fs.writeFile('./writeme.txt', '글을 입력합니다.', (err) => {
    if (err) {
        throw err;
    }
    fs.readFile('writeme.txt', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data);
    })
})
*/

const fs = require('fs').promises;
fs.writeFile('./writeme.txt', '글을 입력합니다.')
    .then(() => {
        return fs.readFile('writeme.txt', 'utf8')
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err)
    })