const result = document.querySelector('#result');
const button = document.querySelector('button');

const luckyNumber = {
    digitCount: 6, // 숫자 6개
    maxNumber: 45, // 최대 숫자 45
};

// 버튼 클릭 시, 로또번호 추출하여 출력
button.addEventListener('click', () => {                          // 1. 버튼을 클릭하면 함수를 실행한다.
    let {digitCount, maxNumber} = luckyNumber                     // 2. 숫자를 구조 분해 할당으로 가져온다.
        console.log(digitCount, maxNumber);
    const numberSet = new Set();                                  // 3. 중복될 수 없는 주머니를 하나 만든다.
    while (numberSet.size != digitCount){                               /* while문을 사용해야 중복된 숫자를 뽑았을 때도 문제가 없다. */
        // let randomNumber = Math.random();                      // 4. 0부터 1까지 랜덤한 숫자가 나온다. ( 0 <= x < 1)
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;   // 5. 1부터 45까지 랜덤한 숫자가 나온다. ( 0*45+1 <= x < 1*45+1)
            numberSet.add(randomNumber);                          // 6. 뽑힌 randomNumber를 numberSet에 담는다.
    }
    result.innerText = `${[...numberSet].sort((a,b) => a-b)}`           // 7. 전개 연산자를 이용하면 set을 array로 바꿀 수 있다. array로 바꾼 후 오름차순 정렬한다.

    /* for문을 사용하면 중복된 숫자를 뽑았을 경우, 중복된 숫자가 없어지는 문제가 있다.
        for (let i=0; i<digitCount; i++){
        // let randomNumber = Math.random();                      // 4. 0부터 1까지 랜덤한 숫자가 나온다. ( 0 <= x < 1)
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;   // 5. 1부터 45까지 랜덤한 숫자가 나온다. ( 0*45+1 <= x < 1*45+1)
            numberSet.add(randomNumber);                          // 6. 뽑힌 randomNumber를 numberSet에 담는다.
    }
    */
});
