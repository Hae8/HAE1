const s = new Set();

s.add(false);
s.add(1);
s.add('1');
s.add(1);
s.add(1.0);
s.add(2);

console.log(s); // Set(4) { false, 1, '1', 2 }
console.log(s.size); // 4
console.log(s.has(1)); // true

for (const e of s) {
    console.log(e);
}
// false
// 1
// 1
// 2

s.forEach((e) => {
    console.log(e);
})
// false
// 1
// 1
// 2

s.delete(1);
console.log(s); // Set(3) { false, '1', 2 }
s.clear();
console.log(s); // Set(0) {}

const arr = [2,0,2,4,0,4,0,1];
const resultSet = new Set(arr);
console.log(resultSet); // Set(4) { 2, 0, 4, 1 }
const resultArr = Array.from(resultSet);
console.log(resultArr); // [ 2, 0, 4, 1 ]