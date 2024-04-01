if (true) {
    var num1 = 3; // var는 함수 스코프
    const num2 = 5 // const(상수)는 블록 스코프 - 블록 내에서만 사용 가능, 변경 불가
    let num3 = 7 // let(변수)은 블록 스코프 - 블록 내에서만 사용 가능, 변경 가능
} 
console.log(num1); // 3
console.log(num2); // ReferenceError: num2 is not defined
console.log(num3); //ReferenceError: num3 is not defined