// 모달 구현
let openBtn = document.querySelector('#open');
let modalBox = document.querySelector('#modal-box');
let closeBtn = document.querySelector('#close');

//프로필 보기 버튼(#open)을 클릭하면 나타나는 모달
openBtn.addEventListener('click', () => {
    // 모달박스(#modal-box)에 active클래스(.active)가 추가
    modalBox.classList.add('active')
})

//close 버튼(#close)을 눌렀을 떄 사라지는 모달
closeBtn.addEventListener('click',() => {
    // 모달박스(#modal-box)에 active클래스(.active)가 제거
    modalBox.classList.remove('active')
})

//모달 창 외부를 클릭했을 때도, 모달창이 닫힌다.
window.addEventListener('click', (e) => {
    if (e.target == modalBox){
        modalBox.classList.remove('active')
    }
})