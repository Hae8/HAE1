const oddChecker = require("./oddCheck");

// 문자열을 숫자로 변환해서 홀수인지 짝수인지 반환하는 프로그램

function strNumOddOrEven(str) {
    let number = Number(str)
    return oddChecker(number)
}

let result = strNumOddOrEven("402")
console.log(result);