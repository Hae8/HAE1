// setInterval(콜백함수, 시간)

// function greeting() {
//     document.write('안녕하세요<br/>');
// }
// setInterval(greeting, 2000);

let cnt = 0;
let timer = setInterval(() => {
    document.write('안녕하세요<br/>')
    cnt++;
    if (cnt == 2) {
        document.write('안녕히 계세요<br/>');
        clearInterval(timer);
    }
}, 2000);