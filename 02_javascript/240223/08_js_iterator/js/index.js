/*
iterable : 순서대로 처리가 가능한
이터러블 객체: 문자열, 배열, 맵, 셋
*/

// for ~ of 문 사용 가능
// spread 연산자[...] 사용 가능
// 구조 분해 할당 가능

/* 이터러블 객체: 문자열 */
let str = "Hello";
for (let char of str) {
    console.log(char);
    /*
    H;
    e;
    l;
    l;
    o;
    */
}

let str_arr = [...str]; // str.split("");
console.log(str_arr); // ['H', 'e', 'l', 'l', 'o']

let [h, e] = str;
console.log(h, e); // H e

/* 이터러블 객체: 배열 */
let seasons = ['봄', '여름', '가을', '겨울']

/* 이터레이터 : 컬렉션(문자열, 배열, 맵, 셋 등)을 순회하는 방법을*/
let seasons_iterator = seasons[Symbol.iterator]();
console.log(seasons_iterator.next()); // {value: '봄', done: false}
console.log(seasons_iterator.next()); // {value: '여름', done: false}
console.log(seasons_iterator.next()); // {value: '가을', done: false}
console.log(seasons_iterator.next()); // {value: '겨울', done: false}
console.log(seasons_iterator.next()); // {value: undefined, done: true}