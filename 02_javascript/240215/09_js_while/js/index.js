/*
for (let i = 0; i<3; i++) {
    console.log(i);
    let num = Number(prompt('점수를 입력하세요'));
    if (num >= 60) {
        console.log('합격입니다.');
    } else {
        console.log('불합격입니다.');
    }
}
*/

/*
let i = 0
while (i < 3) {
    let num = Number(prompt('점수를 입력하세요'));
    if (num >= 60) {
        console.log('합격입니다.');
    } else {
        console.log('불합격입니다.');
    }
    i++;
}
*/

let i = 0
do {
    let num = Number(prompt('점수를 입력하세요'));
    if (num >= 60) {
        console.log('합격입니다.');
    } else {
        console.log('불합격입니다.');
    }
    i++;
}
while (i < 3)
// do while은 한 번은 무조건 실행된다.

