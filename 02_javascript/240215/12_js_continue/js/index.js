/*
let sum = 0;

for(let i = 1; i <= 10; i++) {
    if (i == 5){
        continue;
    }
    sum += i;
}
// continue가 5에 걸릴 경우, 5을 건너뛰고 프로그램이 작동된다.
*/

/*
// 1부터 10까지의 반복을 하면서, 홀수 합계만 구하기
let sum = 0;

for(let i = 1; i <= 10; i++) {
    if (i % 2){
        sum += i;
    }
}
document.write(`<h1>${sum}</h1>`)
// continue 를 안써도 결과값에는 문제는 없지만, console.log(sum)에서 sum값이 두 번씩 찍히는 문제가 있다.
*/

/*
let sum = 0;

for(let i = 1; i <= 10; i++) {
    if (i % 2){
        sum += i;
    } else{
        continue;
    }
    console.log(sum);
}
document.write(`<h1>${sum}</h1>`)
*/

/*
let sum = 0;

for(let i = 1; i <= 10; i++) {
    (i % 2) ? sum += i : 0;
    console.log(sum);
}
document.write(`<h1>${sum}</h1>`)
// 더 간단하게 적을 수도 있다.
*/

let i = 0;
let sum = 0;

while (true) {
    if (i >= 10) {
        break;
    }
    i++;
    if (i % 2){
        sum += i;
    } else{
        continue;
    }
    console.log(sum);
}
document.write(`<h1>${sum}</h1>`)
//  while 을 이용하여 적을 수도 있다.