/* fetch의 GET 요청
// fetch("URL")
fetch("URL", {method:'GET'})
*/

/* fetch의 POST 요청
fetch("URL", {method:'POST', body: ~~~, headers: ~~~ })
*/

/* fetch의 순서
컴퓨터는 fetch(url).then(respose => {})을 받아오는 동안 다음 코드를 실행하기 때문에 clg 에는 132의 순서로 찍힌다.
console.log(1);
fetch(url)
    .then(response => {
        console.log(2);
    })
console.log(3);
*/


const btn = document.querySelector('button');
let num = 0;

btn.addEventListener('click', () => {
    num++;
    let url = `https://dummyjson.com/products/${num}`;

    fetch(url)
    // .then(response => console.log(response));
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const resultDiv = document.querySelector('#result');
        resultDiv.innerHTML = `
        <ul>
        <li>${data.title}</li>
        <li>${data.brand}</li>
        <li>${data.description}</li>
        </ul>
        `;
    })
    .catch(e => {
        console.error(e);
        const resultDiv = document.querySelector('#result');
        resultDiv.innerHTML = "에러발생"
    })
    // .finally(()=> {
            
        // })
})




