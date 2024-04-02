// 문자열의 길이가 홀수인지 짝수인지 반환하는 프로그램

function strLenOddOrEven(str) {
    let strLen = str.length
    return oddChecker(strLen)
}

let result = strLenOddOrEven("모듈 만들어보기")
console.log(result);