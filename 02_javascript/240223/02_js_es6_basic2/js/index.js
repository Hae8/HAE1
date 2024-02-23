/* 구조 분해 할당 [배열] */

let fruits = ['딸기', '바나나', '복숭아'];
// let berry = fruits[0];
// let banana = fruits[1];
// console.log(berry, banana); // 딸기 바나나
let [berry, banana] = fruits; // 위의 코드를 이처럼 쓸 수 있다.
console.log(berry, banana); // 딸기 바나나

let members = ['보름달물해파리', '노무라입깃해파리', '커튼원양해파리', '유령해파리', '꽃모자갈퀴손해파리']
let [leader, ...team_member] = members;
console.log(leader, team_member); // 보름달물해파리 ['노무라입깃해파리', '커튼원양해파리', '유령해파리', '꽃모자갈퀴손해파리']

/* swap: 두 변수 값을 교환하기 */
let left = '키보드';
let right = '마우스';

/* 기존에는 pocket이라는 변수를 만들어 일일히 옮겨주는 식으로 작업을 했어야 했다.
let pocket = left;
left = right;
right = pocket;
*/
[right, left] = [left, right];
console.log(left, right); // 마우스 키보드


/* 구조 분해 할당 [객체] */
const user = {
    name: '홍길동',
    age: 20
}

// let name = user.name;
// let age = user.age;
let {name, age} = user; // 위의 코드를 이처럼 쓸 수 있다.
console.log(name, age); // 홍길동 20

// let userName = user.name;
// let userAge = user.age;
let { name:userName, age:userAge} = user; // 변수의 이름과 프로퍼티 이름이 다르다면 name값을 userName에 할당하는 부분을 써줘야 한다.
console.log(userName, userAge); // 홍길동 20

/* 구조 분해 할당 [중첩된 객체] */
const student = {
    name: '홍길동',
    age: 20,
    scores: {
        kor : 90,
        math: 100,
        eng: 80,
    },
    friends: ['철수', '맹구', '유리']
}

let { name: studentName, scores:{kor, eng}, friends:[f1, f2, f3]} = student;
console.log(name, kor, eng, f1, f2, f3); // 홍길동 90 80 철수 맹구 유리