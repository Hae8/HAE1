let run = () => console.log('3초 후 실행');

console.log('시작');
setTimeout(run, 3000);
console.log('끝');

// 시작
// 끝
// 3초 후 실행
// 순서로 작업이 진행된다. -> 논블로킹 방식