const container = document.querySelector('#container');
const imgArr = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg', 'pic-6.jpg'] // 이미지를 리스트로 만든다.
let imgIdx = 0; // 이미지 리스트에 사용할 인덱스를 변수로 만든다.
container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})` // 이미지 주소를 리스트와 인덱스를 통해 작성한다.

const arrows = document.querySelectorAll('.arrow');

for (let arrow of arrows){
    arrow.addEventListener('click', arrow_func);
}
/* 위의 for문을 forEach로도 만들 수 있다.
arrows.forEach(arrow => {
    arrow.addEventListener('click', arrow_func);
})
*/

function arrow_func(e) {
    if (e?.target.id == 'left') {
        imgIdx--;
        if (imgIdx < 0) {
            imgIdx = imgArr.length - 1;
        }
    }
    else {
        imgIdx++;
        if (imgIdx > imgArr.length - 1) {
            imgIdx = 0;
        }
    }
    container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})` 
}

// setInterval(arrow_func, 3000); // arrow_func함수를 3초마다 실행



/* 위 코드의 function arrow_func()를 풀어서 쓴 것
const left_arrow = document.querySelector('#left');
const right_arrow = document.querySelector('#right');

        left_arrow.addEventListener('click', () => { // 왼쪽 화살표 기능 구현
            imgIdx--;
            if (imgIdx < 0){
                imgIdx = imgArr.length - 1;
            }
            container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`
        })

        right_arrow.addEventListener('click', () => { // 오른쪽 화살표 기능 구현
            imgIdx++;
            if (imgIdx > imgArr.length - 1){
                imgIdx = 0;
            }
            container.style.backgroundImage = `url(./images/${imgArr[imgIdx]})`
        })
*/

///////////////////////////////////
///////////// 참   고 /////////////
///////////////////////////////////
/* 오른쪽 마우스 클릭 못하게 하기 */
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('마우스 우클릭 사용 불가');
})