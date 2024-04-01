// const num1 = 0;
// num1 = 1; // TypeError: Assignment to constant variable.

// const num2; // SyntaxError: Missing initializer in const declaration

let num1 = 0;
num1 = 3;
console.log((num1)); // 3

let month = 4;
let day = 1;

const date = {month, day};
console.log(date); // { month: 4, day: 1 }
date["month"] = 5;
console.log(date); // { month: 5, day: 1 } - 이 부분은 참조된 값이 바뀌는 것이므로 const를 사용했다고 해서 변경이 안되지 않는다.
