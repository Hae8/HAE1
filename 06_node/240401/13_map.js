const m = new Map();

m.set ('a', 'b');
m.set (3, 'c');
const o = {};
m.set(o, 'object');

console.log(m); // Map(3) { 'a' => 'b', 3 => 'c', {} => 'object' }
console.log(m.get('a')); // b
console.log(m.get(3)); // c
console.log(m.get(o)); // object
console.log(m.get({})); // 다른 참조이기 떄문에 undefined가 뜬다.

console.log(m.size); // 3

for (const [k, v] of m) {
    console.log(k, v);
}
// a b
// 3 c
// {} object

m.forEach((v, k) => { // 매개변수의 순서를 반드시 확인해야 한다.
    console.log(k, v);
})
// a b
// 3 c
// {} object

console.log(m.has('a')); // true
console.log(m.delete('a')); // true
console.log(m); // Map(2) { 3 => 'c', {} => 'object' }
m.clear()
console.log(m); //Map(0) {}