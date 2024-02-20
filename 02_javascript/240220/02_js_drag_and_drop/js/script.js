
// 드래그 구현
const box = document.querySelector('#box');
let isDrag = false; // 드래그 상태 변수
let locX, locY = 0;

// mousedown	마우스를 누르고 있을 때
box.addEventListener('mousedown', (e) => {
    isDrag = true;
    locX = e.offsetX;
    locY = e.offsetY;
})

// mouseup	눌렀던 마우스 버튼을 땔 때
window.addEventListener('mouseup', () => { // 드래그가 개체 밖에서도 끝날 수 있는 것이 자연스러우므로 window로 설정
    isDrag = false;
})

// mousemove	마우스를 움직였을 때
window.addEventListener('mousemove', (e) => {  // 드래그가 꼭 개체 내에서만 이뤄질 필요는 없으므로 window로 설정
    if (isDrag) {
        /*
        console.log(`---------------------------`);
        console.log(`페이지 위치: ${e.pageX}, ${e.pageY}`) //전체 페이지 기준 절대적 위치
        console.log(`클라이언트 위치: ${e.clientX}, ${e.clientY}`) // 브라우저 기준 위치
        console.log(`스크린 위치: ${e.screenX}, ${e.screenY}`) // 모니터 화면 기준 위치
        console.log(`오프셋 위치: ${e.offsetX}, ${e.offsetY}`) // 이벤트 대상 기준 위치
        console.log(locX, locY);
        */
        box.innerText = `
            (${locX}, ${locY})에서 드래그 시작 \n
            (${e.clientX}, ${e.clientY})에서 드래그 끝 \n
            (${e.clientX - locX}, ${e.clientY - locY})로 이동
        `
        box.style.left = (e.clientX - locX) + 'px';
        box.style.top = (e.clientY - locY) + 'px';

    }
})