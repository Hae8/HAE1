// 키보드 이벤트

document.body.addEventListener('keydown', (e) => {
    let txtContents = `Code : ${e.code} \n Key : ${e.key}`;
    document.querySelector('#result').innerText = txtContents;
    if(e.key == 'Escape'){
        window.close();
    }
})