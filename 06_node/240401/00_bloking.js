/*
let first = () => {
    second();
    console.log('첫 번째');
}

let second = () => {
    third();
    console.log('두 번째');
}

let third = () => {
    console.log('세 번째');
}

first();
*/

// 세 번째
// 두 번째
// 첫 번째
// 순서로 작업이 진행된다.

let first = () => {
    setTimeout(() => second(), 3000);
    console.log('첫 번째');
}

let second = () => {
    setTimeout(() => third(), 3000);
    console.log('두 번째');
}

let third = () => {
    console.log('세 번째');
}

first();

// 첫 번째
// 두 번째
// 세 번째
// 순서로 작업이 진행된다.