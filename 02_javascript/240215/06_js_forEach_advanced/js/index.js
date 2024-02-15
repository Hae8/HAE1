const students = ["Park", "Kim", "Lee", "Kang"]; //요소들의 배열

/* 기본형 for */
for (let i = 0; i < students.length; i++) {
    document.write(`${i+1}번 ${students[i]}, `)
}

/* 배열의 기능 forEach*/
students.forEach(function(e, i) {
    // document.write(`${students[i]}, `)
    document.write(`${i+1}번 ${e}, `);
});

// forEach문은 배열에서만 사용가능
// 첫 번째는 각각의 요소를 의미 (element)
// 두 번째는 각각의 번째를 의미 (index)

document.write(`<br/>`);

students.forEach((e, i)=> {
    // document.write(`${students[i]}, `)
    document.write(`${i+1}번 ${e}, `);
});

// forEach문 내부의 콜백함수를 화살표 함수로도 쓸 수 있다.

document.write(`<br/>`);

let name = "해파리"; //요소들의 나열(문자열)
console.log(name.length)
for (let i = 0;  i< name.length; i++){
    document.write(`${i+1}번째 글자는 ${name[i]} <br/>`);
}

/* for ~ in */
const son ={
    name : '손흥민',
    height : 183,
    address : '서울'
}

for(key in son){
    console.log(key, son[key]);
}

for(i in students) {
    document.write(`${Number(i)+1}번 ${students[i]}, `);
}

for (let e of students){
    document.write(`${e}, `) //index를 사용하지 못한다는 단점이 있다.
}