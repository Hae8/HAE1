// 1부터 10까지 합계를 구하는 함수 만들기

function calcSum1(){
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        result += i;
    }
    document.write(`1부터 10까지의 합계는 ${result}입니다.`);
}
calcSum1();
document.write(`<br/>`);

//매개변수 두 개(start, end)를 이용해서 start부터 end까지의 합계를 구하는 함수를 정의
function calcSum2(start = 1,end = 10){
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    document.write(`${start}부터 ${end}까지의 합계는 ${result}입니다.`);
}

calcSum2();
document.write(`<br/>`);
calcSum2(51,100);
document.write(`<br/>`);