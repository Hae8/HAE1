// 학과 선택 시, alert으로 과 알려주기
let selectMajor = document.querySelector('#major');
/*
selectMajor.onchange = () => {
    let major = selectMajor.options[selectMajor.selectedIndex];
    console.log(major.innerText, major.value);
    document.querySelector('#majorName').value = major.innerText
}
*/

selectMajor.onchange = () => { //값이 변경될 때마다 찍힌다.
    let major = selectMajor.options[selectMajor.selectedIndex]; //selectMajor라는 변수 중 selectedIndex를 통해 선택된 인덱스를 고른다.
    console.log(major.innerText, major.value);
    document.querySelector('#majorName').value = major.value; // selectedIndex를 통해 선택된 인덱스를 majorName에 적는다.
    if (major.value){ // 만약 value 값이 있다면
        document.querySelector('#majorName').readOnly = true; //읽기 전용으로 바꾼다.
    } else{ // 만약 value 값이 없다면
        document.querySelector('#majorName').readOnly = false; //읽기 전용으로 바꾸지 않는다.
    }
}


// radio 버튼을 선택할 때 값을 가져오기
let btn = document.querySelector('#send');
btn.onclick = () => {
let subjectRadio = document.querySelector('input[name="subject"]:checked'); //radio 버튼 중 선택된 것만 가져온다.


// checkbox 버튼을 선택할 때 값을 가져오기
let mailingCheck = document.querySelectorAll("input[name='mailing']:checked"); //checkbox 버튼 중 선택된 것만 리스트로 가져온다.

//result를 통해 radio 버튼 value와 checkbox 버튼 value를 alert 한다.
let result = "";
result += subjectRadio.value + ", ";


// 반복문을 통해 값을 가져오기
/* index를 사용하면 속성까지 표시하므로 사용할 수 없다.
for (let i in mailingCheck){ 
    result += mailingCheck[i].value + ", ";
} 
*/

for (let i=0; i<mailingCheck.length; i++){ //속성까지 가져오면 안되므로 길이에 제한을 주어 사용한다.
    result += mailingCheck[i].value + ", ";
}

/* 같은 내용을 e 를 사용해 작성할 수 있다.
for (let e of mailingCheck){
    result += e.value + ", ";
}
*/

/* 같은 내용을 forEach를 사용해 작성할 수 있다.
mailingCheck.forEach(e => {
    result += e.value + ", ";
})
*/

/*
let subject = document.getElementsByName('subject'); //
let option;
for (let i=0; i<subject.length; i++){ 
    option += subject[i].value;
    break;
*/

alert(result);
}

/*콘솔의 종류
console.log
console.error
console.info
console.debug
console.warn
*/
