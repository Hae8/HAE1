let answer = Math.floor(Math.random() * 31 + 1);
// 1. 사용자로부터 정답이 입력될 때까지 숫자를 입력받는다. (hint. while)
// 2. 입력은 0보다 큰 값만 입력 가능하다. (0보다 작다면 다시 입력 _ hint. continue)
// 3. 정답보다 작으면 up을, 정답보다 크면 down을 출력하고, 계속 숫자를 입력받는다.


let userAnswer = 0
let count = 0
while(answer !== userAnswer){
    count++
    userAnswer = Number(prompt(`숫자를 입력하세요. 게임을 그만두고 싶다면 아무 글자나 입력하세요.`))
    if (userAnswer < 0){
        alert('0보다 큰 값으로 다시 입력하세요');
        continue;
    }else if (userAnswer < answer){
        alert('up');
        continue;
    }else if (userAnswer > answer){
        alert('down');
        continue;
    }else if (userAnswer == answer){
        alert('정답입니다')
        document.write(`<h1>축하드립니다!</h1>정답은 ${answer}입니다.<br/>총 시도횟수는 ${count}번입니다.`)
        break;
    }else{
        alert('게임을 중단합니다')
        document.write(`<h1>게임이 중단되었습니다.</h1>정답은 ${answer}입니다.<br/>총 시도횟수는 ${count}번입니다.`)
        break;
    }
}