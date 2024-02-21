document.addEventListener('DOMContentLoaded', () => {
    const resultSpan = document.querySelector('#result');
    const startSpan = document.querySelector('#startDay');
    const startDay = new Date ("2024-01-01"); // 시작일
    const endDay = new Date (); // 종료일

    // 시작일부터 종료일까지의 기간을 계산 (밀리초)
    let subtime = endDay.getTime() - startDay.getTime();
    let subDay = Math.ceil(subtime / (1000 * 60 * 60 * 24));
    resultSpan.innerText = subDay
    startSpan.innerText = startDay.toLocaleDateString()
});