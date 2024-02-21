window.addEventListener('load', () => {
    /*
    const bgCount = 5;
    let randomNum = Math.floor(Math.random() * bgCount) + 1 ;
    document.body.style.backgroundImage = `url(images/bg-${randomNum}.jpg)` ;
    */

    const imgArr = ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg'];
    let randomNum = Math.floor(Math.random() * imgArr.length);
    let x_img = sessionStorage.getItem('bg'); // 1. 이미지가 중복되는 것을 방지하도록 세션을 준비한다.


    while (x_img == imgArr[randomNum] && imgArr.length != 1){ // 2. 첫번째 루프에서는 null과 imgArr[randomNum]값이 대조된다.
        randomNum = Math.floor(Math.random() * imgArr.length); // 4. 두번째 부터는 x_img에 저장된 값과 imgArr[randomNum]값을 대조하여 같을 경우 함수를 재실행시킨다.
    }

    sessionStorage.setItem('bg', imgArr[randomNum]); // 3. imgArr[randomNum]값을 세션에 저장한다.
    document.body.style.backgroundImage = `url(./images/${imgArr[randomNum]})`
});