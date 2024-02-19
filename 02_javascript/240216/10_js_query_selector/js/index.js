let title = document.querySelector('h1');
// let title = document.getElementsByTagName('h1')[0];
console.log(title);
console.log(title.innerText); // 내부 text
console.log(title.innerHTML); // 내부 HTML
console.log(title.textContent); // text가 소스 그대로
title.innerText = "안녕\n하세요~";
// title.textContent = "안녕\n하세요~";

let imgBox = document.querySelector('#profile');
// let imgBox = document.getElementById('profile');
console.log(imgBox);
console.log(imgBox.innerText); // 내부 text
console.log(imgBox.innerHTML); // 내부 HTML
console.log(imgBox.textContent); // text가 소스 그대로


// console.log(document.getElementsByClassName('web3'));
console.log(document.querySelector('#myBox > p'));
console.log(document.querySelectorAll('#myBox > p'));

// title.onclick = function () {
//     title.textContent = "클릭해서 바꾼 제목입니다.";
//     imgBox.querySelector('img').src = 'https://placehold.co/200x200';
// }

title.onclick = () => {
    title.textContent = "클릭해서 바꾼 제목입니다.";
    imgBox.querySelector('img').src = 'https://placehold.co/200x200';
}