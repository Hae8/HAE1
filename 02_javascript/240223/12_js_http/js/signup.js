// 이름 : 5글자까지만 입력
const nameInput = document.signupForm.name;
nameInput.addEventListener('blur', () => {
    if (nameInput.value.length > 5) {
        alert('이름은 5글자까지만 입력 가능합니다.')
        nameInput.value = nameInput.value.slice(0,5)
    }
});


//⚠️⚠️⚠️아이디 alert에서 탈출이 되지 않고, 아이디 alert가 계속 발생하는 문제 (오류발생상황:이름 입력 칸을 클릭하여 이름 alert가 떠있는 상황에서, 아이디 입력 칸을 클릭한 상황)⚠️⚠️⚠️

// 아이디 : 5~20글자까지 제한, 소문자로 저장, 중복여부 체크
const idInput = document.signupForm.id;
idInput.addEventListener('blur', () => {
    if (idInput.value.length < 5 || idInput.value.length > 20 ){
        alert('아이디는 최소 5글자, 최대 20글자로 작성 가능합니다.');
        idInput.value = "";
    };
    idInput.value = idInput.value.toLowerCase();
    /* 중복여부 체크 */
});

// 비밀번호 : 10~16자리 문자, 숫자, ~!@#$%^&*
const pwdInput = document.signupForm.pwd;
pwdInput.addEventListener('blur', () => {
    if (pwdInput.value.length < 10 || pwdInput.value.length > 16 ){
        alert('비밀번호는 최소 10글자, 최대 16글자로 작성 가능합니다.');
        pwdInput.value = "";
    }
    /* 문자, 숫자, 특수문자 확인 */
});

// 비밀번호 확인 : 일치 여부 체크
const pwdChkInput = document.signupForm.pwdChk;
pwdChkInput.addEventListener('blur', () => {
    if (pwdInput.value !=  pwdChkInput.value){
        alert('비밀번호가 다릅니다.');
        pwdChkInput.value = "";
    }
});


// 이메일 선택 : 주소 자동기입 및 읽기전용 처리
// 이메일 직접입력 : 주소 빈 칸 설정 및 작성 가능 처리

let emailAddrAuto = document.querySelector('#addrBox');
console.log(emailAddrAuto);
emailAddrAuto.onchange = () => { //값이 변경될 때마다 찍힌다.
    let emailAddr = emailAddrAuto.options[emailAddrAuto.selectedIndex]; //selectMajor라는 변수 중 selectedIndex를 통해 선택된 인덱스를 고른다.
    document.querySelector('#user-email-addr').value = emailAddr.value;
    if (emailAddr.value){ // 만약 value 값이 있다면
        document.querySelector('#user-email-addr').readOnly = true; //읽기 전용으로 바꾼다.
    } else{ // 만약 value 값이 없다면
        document.querySelector('#user-email-addr').readOnly = false; //읽기 전용으로 바꾸지 않는다.
    }
}


//❓❓❓이메일 도메인이 빈칸일 때 alert 띄우는 법❓❓❓
const emailAddrInput = document.signupForm.emailAddr;
emailAddrInput.addEventListener('blur', () => {
    if (emailAddr.value = ""){
        alert('이메일 주소를 입력하세요.');
    }
});

// 회원가입 버튼 클릭 시 : 이동하지 않고 객체로 값 가져오기
