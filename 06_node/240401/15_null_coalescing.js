const a = 0;
const b = a ?? 3; // a가 null 또는 undefined 이면 b는 3
const c = a || 3; // boolean(a)가 false 이면 c는 3
console.log(b); // 0
console.log(c); // 3

const d = 0;
const e = d ?? 3;
console.log(e); // 0

const f = null;
const g = f ?? 3;
console.log(g); // 3

const h = undefined;
const i = h ?? 3;
console.log(i); // 3