let name = '손흥민';
let age = 30;
let backNumber = 7;

let son = {
    name,
    age,
    backNumber,
}

console.log(son);

// 없는 키에 접근하면 undefined 값이 반환된다.
console.log(son.address);

// in 키워드로 객체에 해당 키가 존재하는지 여부를 체크한다.
console.log('address' in son); // false
console.log('name' in son); // true

for (let key in son) {
    console.log(key, son[key]);
}