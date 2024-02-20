const body = document.body;
const div = document.querySelector('div');
const section = document.querySelector('section');
const p = document.querySelector('p');

/* 버블링 */
function bubbling(e){
    console.log(`버블링 => e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`)
}

body.addEventListener('click', bubbling);
div.addEventListener('click', bubbling);
section.addEventListener('click', bubbling);
p.addEventListener('click', bubbling);

// 버블링은 안에서 바깥으로(자식요소에서 부모요소로) 이벤트가 진행된다.

/* 버블링을 인위적으로 막을 수 있다.
body.addEventListener('click', bubbling);
div.addEventListener('click', (e) => {
    e.stopPropagation();
});
section.addEventListener('click', bubbling);
p.addEventListener('click', bubbling);
*/


/* 캡쳐링
function capturing(e){
    console.log(`캡쳐링 => e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`)
}

body.addEventListener('click', capturing, true);
div.addEventListener('click', capturing, true);
section.addEventListener('click', capturing, true);
p.addEventListener('click', capturing, true);

// 캡쳐링은 바깥에서 안으로(부모요소에서 자식요소로) 이벤트가 진행된다.
*/