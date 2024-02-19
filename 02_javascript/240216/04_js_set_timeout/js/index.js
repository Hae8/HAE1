let second = 0;
let timer = setInterval(()=>{
    second += 100;
    console.log(second);
    if (second === 3000) {
        clearInterval(timer);
    }
}, 100)

setTimeout(()=>{
    document.write('안녕하세요');
}, 3000)