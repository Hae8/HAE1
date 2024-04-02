const str = "가나다";
const num = 402;
const bool = false;
const obj = {
    outside : {
        inside : {
            key : 'value'
        }
    }
}

console.time('전체 시간');
console.log('평범한 로그', '쉼표로 구분해', '여러 값 풀력 가능');
console.log(str, num, bool);
console.error('에러 메시지는 error에 담아주세요')

console.table([{name: '짱구', birth: 1999}, {name: '철수', birth: 2000}])

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('시간 측정');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('시간 측정');

function a() {
    b();
}

function b() {
    console.trace('에러 위치 추적');
}

a();

console.timeEnd('전체 시간');