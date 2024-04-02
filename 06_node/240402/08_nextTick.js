setImmediate(() => {
    console.log("5. setImmediate"); // 이벤트 루프의 마지막 단계에서 살행
})

process.nextTick(() => {
    console.log("2. nextTick"); // 마이크로 태스크 큐
})

setTimeout(() => {
    console.log("4. setTimeout"); // 백그라운드 - 태스크 큐
}, 0)

Promise.resolve().then(() => {
    console.log("3. Promise");  // 마이크로 태스크 큐
})

console.log("1. no callback");