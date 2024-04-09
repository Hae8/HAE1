/* 배열 메서드 map() */ 
// 배열 안의 요소들을 처리해, 새로운 배열 생성 (재배열)
// 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아, 새로운 배열을 반환한다.

const arr = [1, 3, 5, 7, 9];
const mapArr1 = arr.map((x) => x + 1); // 2 4 6 8 10
const mapArr2 = arr.map((x, idx)=> x + idx); // 1 4 7 10 13
const mapArr3 = arr.map((x, idx, arr) => x + arr[2]); // 6 8 10 12 14

console.log(mapArr1);
console.log(mapArr2);
console.log(mapArr3);