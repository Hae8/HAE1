let textTen = '10';
let textfive = '5';
let five = 5;

// 숫자 연산보다 문자 연결 연산이 우선 적용된다.
console.log(textTen + textfive); // '105'
console.log(textTen + five); // '105'
console.log(five + textTen); // '510'

console.log(Number(textTen) + five); // 15

// Promotion
Promotion = -1 * '100';
console.log(Promotion); // -100
console.log(typeof(Promotion)); // number

// Number Casting
console.log(
    Number(7), // 7
    Number('7'), // 7
    Number('Two'), // NaN
    Number(true), // 1
    Number(false), // 0
    Number(null), // 0
    Number(undefined) // NaN
);

console.log(Number('Two')); // NaN
typeof(Number('Two')); // number
typeof(NaN); // number

// String Casting
console.log(
    String(7), // '7'
    String('7'), // '7'
    String('Two'), // Two
    String(true), // true
    String(false), // false
    String(null), // null
    String(undefined) // undefined
);

//Boolean Casting: 뭐라도 있으면 true, 뭣도 없으면 false
console.log(
    Boolean(-7), // true
    Boolean(0), // false
    Boolean(1.7), // true
    Boolean(-7), // true

    Boolean(''), // false
    Boolean('7'), // true
    Boolean('0'), // true
    Boolean(' '), // true
    Boolean('Two'), // true
    Boolean('true'), // true
    Boolean('false'), // true

    Boolean(null), // false
    Boolean(NaN), // false
    Boolean(undefined) // false
);