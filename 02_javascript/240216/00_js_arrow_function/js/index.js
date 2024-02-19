/* 함수선언문 */
function sum1(x, y) {
    return x + y;
}

/* 함수표현식 */
let sum2 = function(x, y) {
    return x + y;
}

/* 함수표현식(화살표) */
let sum3 = (x, y) => {
    return x + y;
}

/* 화살표 예제 */
let hello1 = () => console.log("Hello?");
let hello2 = () => "Hello"; // { return "Hello"; }
let hello3 = name => console.log(`Hello ${name}`);


hello1(); // 콘솔에 Hello?를 출력하는 함수(hello1) 동작
console.log(hello2());  // Hello를 반환하는 함수(hello2) 동작하여, 반환값 콘솔에 출력
hello3('홍길동') // 매개변수 '홍길동'을 이용해 Hello 홍길동을 콘솔에 출력하는 함수(hello3) 동작