const util = require('util');
const crypto = require('crypto');

const oneDigit = util.deprecate((num) => {
    return num % 10
}, '더이상 지원하지 않는 함수입니다.') // 동작은 하지만 지원이 만료되거나 등의 문제가 있는 함수일 경우, util을 통해 경고할 수 있다.

console.log(oneDigit(207435023));

const randomBytesPromise = util.promisify(crypto.randomBytes);

randomBytesPromise(64)
    .then((buf) => {
        console.log(buf);
    })
    .catch((err) => {
        console.error(err);
    })