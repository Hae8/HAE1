/*
console.log(number_let);
console.log(number_var);

let number_let = 123; //Uncaught ReferenceError: Cannot access 'number_let' before initialization
var number_var = 123; //undefined: var는 먼저 선언이 되어 자동으로 맨 위로 올라간 후, 할당을 받는다.
*/

/*
//함수 선언문

function sum(){
    console.log('더하기 실행합니다.')
}

sum();
*/

//함수 표현 식
let sum = function(){
    console.log('더하기 실행합니다.')
    
}
sum();
//함수 선언문과 함수 표현식은 변수 선언 순서의 차이를 가진다.

/*
자바스크립트의 실행 순서! (Hoisting)
1. parser라는 것이 빌드 진행하면서 문법 검사
    -> 이 때, 코드 내에 선언할 수 있는 것들을 모두 선언
    -> 코드의 위치가 실제로 올라가는 것은 아니지만,
    -> 선언문의 사용범위가 위까지 확대된다.
*/
