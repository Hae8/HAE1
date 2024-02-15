while (true) {
    let num = Number(prompt('오늘은 몇 일인가요?'));
    if (num === 15){
        alert('정답')
        break;
    } else {
        alert('틀렸습니다. 다시 시도합니다.');
    }
}