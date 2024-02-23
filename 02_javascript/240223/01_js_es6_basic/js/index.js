/* 매개변수 기본값 설정 */
function sum(x,y = 1) {
    return x+y
}

console.log(sum(1,2)); // 3
console.log(sum(2)); // 3

/* 가변형 매개변수(spread) */
function addNum(...nums){
    let total = 0;
    for (let num of nums){
        total += num;
    }
    return total;
}

console.log(addNum(1,2)); // 3
console.log(addNum(1,2,3,4,5)); // 15

/* 배열 연산 (spread) = concat */
let arr1 = [ 1, 2, 3 ];
let arr2 = [ 4, 5, 6 ];
let arr3 = [ 7, 8, 9 ];

console.log(arr1.concat(arr2, arr3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([...arr1, ...arr2, ...arr3]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* 배열 복사 */
let arr4 = [10, 20, 30];
let arr5 = arr4;
arr5[1] = 200;
console.log(arr4, arr5); // [10, 200, 30], [10, 200, 30]

let arr6 = [...arr4];
arr6[1] = 300;
console.log(arr4, arr6); // [10, 200, 30], [10, 300, 30]

/* 객체 속성 */
let obj1 = { one : 1, two : 2, three : 3 };

/* 객체 속성 추가 */
obj1.four = 4;
console.log(obj1); // {one: 1, two: 2, three: 3, four: 4}

// obj1.important number = false; // syntax error
obj1["important number"] = false;
// console.log(obj1.important number); // syntax error
console.log(obj1["important number"]); // false;

/* 계산된 프로퍼티명 (키) */
function fn() {return 'key'}

let obj2 = {[fn()] : "value"} // 함수 결과가 키로 사용된다.
console.log(obj2); // { key : 'value' }

function add(a, b) { return a + b };
let obj3 = { [fn()] : "value", [`${add(1,2)} key`]: 'three' } // 함수 결과가 키로 사용된다.
console.log(obj3); // { key : 'value', 3 key : 'three' }

obj3[`${add(2,2)} key`] = 'four'
console.log(obj3); // { key : 'value', 3 key : 'three', 4 key : 'four' }

function makeUser(name, age){
    // return { name:name, age:age }
    return { name, age } // 똑같으면 줄여 쓸 수 있다.
}

console.log(makeUser('해파리', 20)); // { name: '해파리', age: 20 }

/* 객체에서 심벌키 사용 */
/* 
    Javascript에서는 총 6개의 기본(원시, primary) 데이터 타입  : number string boolean null undefined symbol
    그리고 1개의 객체 타입: object
    
    symbol은 객체의 고유한 식별자 (key)를 만들 때 사용된다.
    객체 프로퍼티 키를 고유하게 설정하므로써, 키의 충돌을 방지할 수 있다.
*/

let id1 = Symbol();
let id2 = Symbol();
console.log(id1, id2); // Symbol() Symbol()
console.log(id1 == id2, id1 == id1); // false true

let userName = Symbol('name');
let userPwd = Symbol('name')
console.log(userName, userPwd); // Symbol(name) Symbol(name)
console.log(userName == userPwd); // false

let userObj = {
    name : '해파리',
    age : 20,
    [userName] : 'jellyfish',
    [userPwd] : function() {
        let pwd = prompt('비밀번호를 입력하세요');
        return pwd;
    }
}

console.log(userObj); // {name: '해파리', age: 20, Symbol(name): 'jellyfish', Symbol(name): ƒ} // name: 해파리 ; age: 20

for (let key in userObj){
    console.log(`${key}: ${userObj[key]}`);
    /*
    name: 해파리;
    age: 20;
    */
}

// Symbol로 저장된 값은 for 문에서 출력되지 않는다.
// Symbol은 숨김 프로퍼티로 사용할 수 있다.

console.log(userObj[userName]); // jellyfish
console.log(userObj[userPwd]()); // '비밀번호를 입력하세요' 함수 실행

// 한 번 만들어진 Symbol은 다시 사용된다.
let phone1 = Symbol.for('tel'); // Global Symbol Registry에 저장 (최초로 처음 만든 Symbol)
let phone2 = Symbol.for('tel'); // 가져와 재사용
console.log(phone1, phone2); // Symbol(tel) Symbol(tel)
console.log(phone1 == phone2); // true

// Global Symbol Registry에 저장된 Symbol은 Symbol.keyFor() 메서드를 이용해 확인 가능
console.log(Symbol.keyFor(phone1)); // tel //  Global Symbol Registry을 뒤져서 Symbol의 키값을 찾는다.





