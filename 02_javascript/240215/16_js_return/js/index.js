// x와 y의 합 구하기
function calcSum(x, y) {
    let result = x + y;
    return result; //return 뒤에 추가 코드를 적어도 실행되지 않는다.
}

// x와 y의 차 구하기
function calcSubs(x, y) {
    return x - y;
}

// x와 y의 곱 구하기
function calcMulti(x, y) {
    return x * y;
}

// x와 y의 차 구하기
function calcDiv(x, y) {
    return x / y;
}

let firstNum = Number(prompt("첫 번째 숫자를 입력하세요"))
let secondNum = Number(prompt("두 번째 숫자를 입력하세요"))
let signal = Number(prompt("1-더하기, 2-빼기, 3-곱하기, 4-나누기"))

let result = 0
switch(signal){
    case 1:
        result = calcSum(firstNum, secondNum);
        break;

    case 2:
        result = calcSubs(firstNum, secondNum);
        break;
        
    case 3:
        result = calcMulti(firstNum, secondNum);
        break;
        
    case 4:
        result = calcDiv(firstNum, secondNum);
        break;
        
}
document.write(result);

function isOdd(x) {
    if (x%2) return true;
    return false;
}