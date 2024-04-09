/* 배열 메서드 filter() */ 
// 콜백 조건에 충족하는 요소만을 뽑아오는 메서드
// 주어진 함수의 테스트를 통과하는 모든 요소를 뽑아, 새로운 배열을 반환한다.

const arr = [1, 2, 3, 4, 5, 6];
const isOddArr = arr.map(x => x % 2 == 1);
console.log(isOddArr);
const oddArr = arr.filter(x => x % 2 == 1);
const thirdUpArr1 = arr.filter((x, idx) => idx >= 2); // [2]번째 이후 요소를 모아 반환
const thirdUpArr2 = arr.filter((x, idx, arr) => x >= arr[2]); // arr[2] 요소보다 큰 요소를 모아 반환
console.log(oddArr);
console.log(thirdUpArr1);

const fruit = ['사과', '복숭아', '바나나', '수박', '용과', '망고', '체리'];
const threeWords = fruit.filter( x => x.length == 3 );
console.log(threeWords);