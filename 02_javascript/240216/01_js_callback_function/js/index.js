function showInfo1(name, age) {
    document.write(`안녕하세요?\n${name}님, ${age}살이시네요.`);
}
function showInfo2(name, age) {
    document.write(`안녕?\n${name}야, ${age}살이니 말 놓을게?`);
}
function getInfo(callback) {
    let 이름 = prompt('이름을 입력하세요');
    let 나이 = prompt('나이를 입력하세요');
    callback(이름, 나이);
}
getInfo(showInfo1);
getInfo(showInfo2);
// getInfo 함수에서 showInfo 함수를 인수로 받아 실행한다.
// showInfo 함수를 인수로 받는 것을 콜백 함수라고 한다.


let btn = document.querySelector('button');

// function hello() {
//     console.log("안녕하세요");
// }
// btn.addEventListener('click', hello);

// btn.addEventListener('click', function () {
//     console.log("안녕하세요");
// });

btn.addEventListener('click', () => {
    console.log("안녕하세요");
});