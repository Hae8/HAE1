// let num = Number(prompt());

// if (Boolean(num) == false) {
//     document.write('에러')
// } else if (num % 5 == 0 || num % 7 == 0){
//     document.write('통과')
// } else{
//     document.write('통과 실패')
// };

function chk(){
    let num = Number(document.getElementById('num_input').value);

// if 조건문 안에 있으면 자동으로 Boolean이 된다.
// num == false 과 !num이 같은 표현
    if (!num) {
        document.write('에러')
    } else if (num % 5 == 0 || num % 7 == 0){
        document.write('통과')
    } else{
        document.write('통과 실패')
    }
}