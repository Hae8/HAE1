const timeout = setTimeout(() => {
    console.log('1.5초 후에 실행');
}, 1500);

const inteval = setInterval(() => {
    console.log('1초 마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('3초 후에 실행 - 이건 실행되지 않는다.');
}, 3000);

setTimeout(() => {
    clearInterval(inteval)
    clearTimeout(timeout2)
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행 - 가장 우선순위가 높다');
});

const immediate2 = setImmediate(() => {
    console.log('즉시 실행 - 이건 실행되지 않는다.');
});
clearImmediate(immediate2);