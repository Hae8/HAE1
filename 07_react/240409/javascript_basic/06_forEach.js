/* 배열 메서드 forEach() */
// 배열의 각 요소에 대해 함수를 실행한다.
// 배열 요소 각각에 대해, 주어진 함수를 실행

const arr = ['해삼', '말미잘', '멍게'];
arr.forEach((x, i) => console.log(x.repeat(i + 1)));