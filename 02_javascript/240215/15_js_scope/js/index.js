/*
function showAge(number) {
    let age = number + '살' 
    document.write(`${age}`);
}

showAge(20);
console.log(age) //Uncaught ReferenceError: age is not defined: age는 지역 변수이기 떄문에 인식하지 못한다.
*/

let age = '300살' //전역변수는 어디서든 사용이 가능하다.
function showAge(number) {
    let age = number + '살'; //지역변수는 함수 내부에서 사용 가능하고, let을 사용해야 전역변수와 독립적으로 사용 가능하다.
    document.write(`${age}`);
}

showAge(20);
console.log(age) // 300살: age는 전역 변수로 기능한다.

/* !!!
변수 간의 충돌을 예방하기 위해,
공통적으로 사용되는 변수가 아니라면 let을 이용해 지역변수로 선언하자.
(함수 내부에서 전역변수로 사용된다면, 함수 호출 후 전역변수가 변경된다.)
*/