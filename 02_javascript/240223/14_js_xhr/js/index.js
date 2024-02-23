let num = 1;

const btn = document.querySelector("button");

btn.addEventListener('click', () => {
    num++;
    const url = `https://dummyjson.com/products/${num}`;
    
    let xhr = new XMLHttpRequest(); // new예약어를 통해 XMLHttpRequest객체의 인스턴스를 만듦
    // xhr.open('GET', './data/product.json')
    xhr.open('GET', url); // = xhr.open('GET', url, true); [비동기 처리]
    xhr.send();
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200){
            let product = JSON.parse(xhr.responseText);
            const result = document.querySelector("#result");
            console.log(product);
            result.innerHTML = `
            <p>상품 명 : ${product.title}</p>
            <p>상품 설명 : ${product.description}</p>
            <div>
                <img src="${product.thumbnail}" alt = "상품이미지" width = "300" />
            </div>  
            `;
            }
        }
});
