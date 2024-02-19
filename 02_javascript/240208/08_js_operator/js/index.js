let number = 27;

// 증감 연산자
console.log(number++); // 27
console.log(number); // 28
console.log(++number); // 29
console.log(number); // 29

console.log("----------------------");

let myNum = Number(prompt('숫자를 입력하세요'));
let isOdd = Boolean(myNum % 2);
console.log(isOdd); // 짝수면 false, 홀수면 True

console.log("----------------------");

let age = 30;
age += 1; 
console.log(age);
age -= 1; 
console.log(age);
age *= 2; 
console.log(age);
age **= 2; 
console.log(age);
age /= 3; 
console.log(age);
age %= 3; 
console.log(age);5

console.log("----------------------");

let age1 = 10;
let exAge1 = --age1;
console.log(age1); // 9
console.log(exAge1); // 9

age1 = 10;
let newAge1 = ++age1;
console.log(age1); // 11
console.log(newAge1); //11

let age2 = 10;
let exAge2 = age2--;
console.log(age2); // 9
console.log(exAge2); // 10

age2 = 10;
let newAge2 = age2++;
console.log(age2); // 11
console.log(newAge2); //10