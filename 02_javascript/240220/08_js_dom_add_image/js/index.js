const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // 1. img 요소를 만들고, src 속성을 생성한다.
    let newImg = document.createElement('img');
    let srcNode = document.createAttribute('src');
    srcNode.value = './images/pic-1.jpg';

    // 2. 생성된 src 속성을 img 요소와 관계 지정한다.
    newImg.setAttributeNode(srcNode);

    // 3. body에 img 요소를 넣는다.
    document.body.appendChild(newImg);

    // 4. 한번만 작동하도록 한다.
}, {once : true})