/* 동기적(Synchronous) 처리 - 결과가 주어질 때 까지 대기 */
console.log("1st");
console.log("2nd");
console.log("3rd");

/* 비동기적(Asynchronous) 처리 - 결과가 주어지는 동안, 다른 작업 처리 */
console.log("1st");
setTimeout(() => {
    console.log("2nd");
}, 0);
console.log("3rd");

// setTimeout 메서드가 비동기적인 메서드이기 때문에 뒤에 실행된다.