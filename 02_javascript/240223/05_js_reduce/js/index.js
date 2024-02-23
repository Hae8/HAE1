/*
forEach ( (요소, 인덱스 배열) => {} )
map ( (요소, 인덱스 배열) => {} )
filter ( (요소, 인덱스 배열) => {} )
*/

/*
    reduce( (누산기, 요소, 인덱스, 배열) => {}, 초기값 )
    배열의 각 요소에 대해 주어진 함수를 실행하고, "하나의 결과값을 반환"
*/

let nums = [1, 2, 3, 4, 5];

/* forEach 사용
let total = 0;
nums.forEach(num => total += num);
console.log(total); //15
*/

let total = nums.reduce((tot, num) => {
    console.log(`tot: ${tot}, num: ${num}`);
    /*
    tot: 10, num: 1
    tot: 11, num: 2
    tot: 13, num: 3
    tot: 16, num: 4
    tot: 20, num: 5
    */
    return tot + num;
}, 10);
console.log(total); // 25

/* 문자열 길이 가져오기 */
let strArr = ["Hello", "Nice", "Javascript"]
let result = strArr.reduce((acc, str) => [...acc, str.length], []);
// let result = strArr.reduce((acc, str) => acc.concat(str.length), []); // 위의 코드를 이처럼 쓸 수 있다.
console.log(result); // [5, 4, 10]
