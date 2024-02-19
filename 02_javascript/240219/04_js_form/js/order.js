// 주문하기 버튼을 클릭하면, 각 항목에 대한 값 입력 여부를 체크한다.
// 만약에 입력 안 된 항목이 있으면 alert를 띄우고 -> 해당 항목으로 focus를 준다.

let orderBtn = document.querySelector('#orderBtn');

function prodNameCheck(){
    if (document.order.prod.value == ""){
        alert('상품명을 입력하세요');
        document.order.prod.focus();
        return false; // 값의 입력여부를 체크하고 값이 없으면 alert와 focus를 수행한 뒤 false를 리턴한다.
    } else {
        return true } // 값이 있으면 true
}

function prodNumCheck(){
    if (!document.order['prodNum'].value) { //ID를 이용해 작성할 수도 있다.
        alert('수량을 입력하세요');
        document.order.prodNum.focus();
        return false; // 값의 입력여부를 체크하고 값이 없으면 alert와 focus를 수행한 뒤 false를 리턴한다.
    } else {
        return true } // 값이 있으면 true
}

function orderNameCheck(){
    if (!document.querySelector('#order-name').value) { //querySelector이용해 작성할 수도 있다.
        alert('주문자 명을 입력하세요');
        document.order.orderName.focus();
        return false; // 값의 입력여부를 체크하고 값이 없으면 alert와 focus를 수행한 뒤 false를 리턴한다.
    } return true // 값이 있으면 true
}

orderBtn.onclick = (e) => {
    if (!prodNameCheck()){
        e.preventDefalult(); // 함수를 넘어가도록 한다. => 폼 태그의 버튼은 폼의 value를 전달하는 것이 기본 동작인데, 이 코드를 통해 기본동작(get 방식으로 넘어가는 것)을 막는다. 
    }
    if (!prodNumCheck()){
        return false; //return false를 쓸 수도 있다.
    }
    return (!orderNameCheck()) ;
}
/*
orderBtn.onclick  = () => {
    if (!document.querySelector('#order-tel').value) {
        alert('주문자 연락처를 입력하세요');
        document.querySelector('#order-tel').focus();
        return false; // 함수 정의와 호출로 나누어 쓰지 않고, 한번에 작성할 수도 있다.
    }
    if (!document.querySelector('#order-addr').value) {
        alert('주문자 주소를 입력하세요');
        document.querySelector('#order-addr').focus();
        return false; 
    }
}

//반복문을 사용해 만들 수도 있다.
let inputList = document.querySelectorAll('input');
orderBtn.onclick = () => {
    inputList.forEach(e => {
        if(!e.value) {
            alert(e.name);
            e.focus();
            return false
        }
    })
}
*/