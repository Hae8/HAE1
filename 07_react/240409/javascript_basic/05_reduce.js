/* 배열 메서드 reduce() */ 
// 배열을 통해 하나의 값을 만든다.
// 배열의 각 요소에 대해 주어진 함수(reducer)를 실행하고, 하나의 값을 반환

// reduce의 사용 구조
// Array.reduce(callback, initialValue);
// callback : 리듀서 함수 _ (acc, cur, idx, src) => { ... }
// acc : 누적값, cur : 현재값, idx : 현재 인덱스, src: 원본 배열

const arr = [1, 2, 3, 4, 5];
const lastValue1 = arr.reduce((acc, cur)=> { return acc + cur });
console.log(lastValue1); // 15

const lastValue2 = arr.reduce((acc, cur) => { return acc + cur }, 10);
console.log(lastValue2); // 25

const lastArr1 = arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur)
    }
    return acc;
}, []);
console.log(lastArr1); // [ 2, 4 ]