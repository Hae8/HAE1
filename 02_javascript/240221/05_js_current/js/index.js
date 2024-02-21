document.addEventListener('DOMContentLoaded', () => { //DOM의 컨텐츠가 다 로드된 후 함수 실행

    let today = new Date(); //오늘 날짜를 받아오기
    const week = ['일','월','화','수','목','금','토']

    function clock() { // 시간을 표시하는 함수 작성하기
        today = new Date();

        /* todayObj.am_pm와 todayObj.hour를 풀어쓴 것
        let am_pm = "AM"
        let hour = today.getHours();
        if (hour === 0){
            hour = 12;
        } else if (hour >= 12){
            hour -= 12;
            am_pm = "PM"
        }
        */

        const todayObj = {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            date: today.getDate(),
            day: week[today.getDay()]+"요일",
            am_pm: today.getHours() < 12 ? 'AM' : 'PM',
            hour: function () {
                let hour = today.getHours() % 12;
                if (hour === 0){
                    hour = 12
                } else if (hour < 10){
                    hour = "0" +hour;
                }
                return hour;
            }, //today.getHours() % 12 == 0 ? 12 : today.getHours() % 12와 같다
            min: today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes(),
            sec: today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()
        }

            const todayDiv = document.querySelector('#today');
            todayDiv.innerHTML =`
                ${todayObj.year}년 ${todayObj.month}월 ${todayObj.date}일 <span>${todayObj.day}</span>
            `;
            const clockDiv = document.querySelector('#clock');
            clockDiv.innerHTML =`
                ${todayObj.am_pm} ${todayObj.hour()} : ${todayObj.min} : ${todayObj.sec}
            `;
    }

    setInterval(clock,1000); // 1초마다 함수 재실행 - 정확히 1초마다 실행되지는 않고 약간의 오차가 존재한다.
    // <button onclick="location.reload()">새로고침</button> 를 통해 오차를 보정한다.
});

