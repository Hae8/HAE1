function mySum1(x, y) { return x + y };
const mySum2 = function (x, y) { return x + y };
const mySum3 = (x, y) => { return x + y; }
const mySum4 = (x, y) => x + y;

console.log(mySum1(1, 2));
console.log(mySum2(1, 2));
console.log(mySum3(1, 2));
console.log(mySum4(1, 2));
console.log(((x, y) => x + y)(1, 2));


const myObj1 = (x, y) => ({ x, y });
const myObj2 = (x, y) => ({ x: x, y: y });
const myObj3 = (x, y) => { return { x, y } };
const myObj4 = function(x, y) { return { x, y }}
function myObj5(x, y) { return { x, y } }

console.log(myObj1("Hello", "JavaScript"));
console.log(myObj2("Hello", "JavaScript"));
console.log(myObj3("Hello", "JavaScript"));
console.log(myObj4("Hello", "JavaScript"));
console.log(myObj5("Hello", "JavaScript"));