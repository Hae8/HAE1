/*
Set : 키 없이 배열처럼 나열하나, 중복되는 요소가 없다
*/

let my_set = new Set();
my_set.add(1).add(2).add(3);
console.log(my_set); // Set(3) {1, 2, 3}

// 중복된 값은 하나만 유지된다.
my_set.add(1);
console.log(my_set); // Set(3) {1, 2, 3}

let nums = [ 10, 20, 30, 20, 30, 10 ]
let my_set2 = new Set(nums);
console.log(my_set2); // Set(3) {10, 20, 30}

for (let num of my_set2){
    console.log(num);
    /*
    10;
    20;
    30;
    */
}

/* set이 가진 프로퍼티과 메서드 */
console.log(my_set2.size); // 3 // 크기

console.log(my_set2.has(30)); // true
console.log(my_set2.has(40)); // false

console.log(my_set2.keys()); // SetIterator {10, 20, 30}
console.log(my_set2.values()); // SetIterator {10, 20, 30}
console.log(my_set2.entries()); // SetIterator {10 => 10, 20 => 20, 30 => 30}

console.log(my_set2.delete(30)); // true
console.log(my_set2.delete(40)); // false

console.log(my_set2); // Set(2) {10, 20}
console.log(my_set2.clear()); // undefined
console.log(my_set2); // Set(0) {size: 0}