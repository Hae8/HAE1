function random(number) {
    return Math.floor(Math.random() * number);
}
// random(number)라는 함수를 정의하는 문장

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}
// bgChange()라는 함수를 정의하는 문장
// rndCol라는 변수를 정의 
// document에서 body를 찾아 style.backgroundColor = rndCol 을 적용

bgChange();
// bgChange()라는 함수를 호출하는 문장