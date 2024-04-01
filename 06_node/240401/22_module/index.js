const { checkOddOrEven } = require('./func');

function checkStringOddOrEven(str) {
    let len = str.length;
    return checkOddOrEven(len);
}

let result = checkStringOddOrEven('안녕하세요')
console.log(result);