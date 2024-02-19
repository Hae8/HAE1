let students = [
    '김다빈', '김민수', '김수아', '김우진', '김진영',
    '노성현', '노효민', '손예림', '오동석', '이가영',
    '이은수', '박유진', '박형준', '박석원', '박소희',
    '조다솜', '차민성', '최승관', '하성덕', '호경화', '최인규',
]
console.log(students);
console.log(students.length);

/* 배열 내 요소 접근 */
console.log(students[students.length - 1]);

/* 배열 내 요소 수정 */
students[20] = "학생 아님";

/* 배열 내 요소 추가 */
// students[100] = "최인규"; 위험한 방식
students.push("최인규"); // 맨 끝에 요소를 추가
students.unshift("최인규"); // 맨 앞에 요소를 추가

/* 배열 내 요소 제거 */
// delete students[100]; 위험한 방식
students.pop(); // 맨 끝에 요소를 제거
students.shift(); // 맨 앞에 요소를 제거

console.log(students);

let rainbow = ['빨', '주', '노', '초', '파', '남', '보'];

for (let i = 0; i < rainbow.length; i++) {
    console.log(rainbow[i]);
}

for (let index in rainbow) {
    console.log(typeof(index));
    console.log(Number(index));
    console.log(rainbow[index]);
}

for (let element of rainbow) {
    console.log(element);
}




console.warn("=================================================");
let arrSample = [
    '최인규',
    20,
    true,
    {
        name: '아이유',
        music: 'love wins all',
        sing: function() {
            console.log('랄랄라');
        }
    },
    function() {
        console.log('배열에는 문자, 숫자, 불린, 객체, 함수 등 여러 자료형을 넣을 수 있다.');
    }
]

console.log(arrSample[0]);
console.log(arrSample[1]);
console.log(arrSample[2]);
console.log(arrSample[3]);
console.log(arrSample[4]);
arrSample[3].sing();
arrSample[4]();