function add1(x, y) {
    return x + y;
}
let add2 =  function(x, y) {
    return x + y;
}
let add3 = (x, y) => {
    return x + y;
}
let add4 = (x, y) => x + y;

// add1 ~ add4는 전부 같은 함수!

function not1(x) {
    return !x;
}
const not2 = x => !x;

let boolValue = true;
console.log(not2(boolValue));