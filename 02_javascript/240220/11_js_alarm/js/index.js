// #btn을 클릭하면, id="noti-box" 하위에 div.noti가 생성되고, 3초 후에 사라짐

const btn = document.querySelector("#btn"); // 1. btn변수에 #btn저장

btn.addEventListener ("click", () => { // 2. btn변수를 클릭하면, 
    const notiBox = document.querySelector("#noti-box"); 
    const noti = document.createElement("div");
    noti.classList.add("noti"); // 3. noti 변수에 class = noti 를 더함
    notiBox.appendChild(noti); // 4. noti 변수를 notiBox 변수의 하위로 연결

    let timer = 3;
    noti.innerText = `알림이 ${timer}초 후에 사라집니다.`;

    setTimeout(() => noti.remove(), 3000);

    let timeSet = setInterval(() => {
        timer--;
        noti.innerText = `알림이 ${timer}초 후에 사라집니다.`;
        if(timer <= 0){ // timer가 계속 돌고있는 문제가 있으므로 시간이 다 되면 timer를 그만 세게 한다.
            clearInterval(timeSet);
        }
    }, 1000)
})