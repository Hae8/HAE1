/* [1] 
function errMsg(){ //매개변수가 없는 함수 정의
    console.error('에러 발생했습니다!');
}


let number = prompt('숫자를 입력하세요')
if(!isNaN(number)) {
    document.write(number * 10);
}else{
    errMsg(); //매개변수가 없는 함수 호출
}
*/

[2]
function errMsg(errCode) { //매개변수가 있는 함수 정의
    let newErrCode = errCode || '알 수 없음'
    console.error(`에러 발생! 에러코드: ${newErrCode}`);
}
/*
function errMsg(errCode = '알 수 없음') {
    console.error(`에러 발생! 에러코드: ${errCode}`);
}
// 위의 코드를 더 간단하게 작성했다.
*/

let number = prompt('숫자를 입력하세요')
if(!isNaN(number)) {
    document.write(number * 10);
}else{
    errMsg('Number_001'); 
    errMsg('Login_002');
    errMsg();
}