let num = Number(prompt("숫자를 입력하세요"));

    for (let i = 0; i < num; i++) {
        console.log(`'Hello JavaScript' ${i + 1}번째 출력`);
    }

// num = 3
for (let i = num; 0 < i; i--) {
    // i = 3, 0 < 3 ---> 참
    // 출력 : Hello Javascript 1번째 출력
    // i = 2, 0 < 2 ---> 참
    // 출력 : Hello Javascript 2번째 출력
    // i = 1, 0 < 1 ---> 참
    // 출력 : Hello Javascript 3번째 출력
    // i = 0, 0 < 0 ---> 거짓 => 조건문 종료
    console.log(`Hello Javascript ${num - i + 1}번째 출력`);
}

for (let i = 0; i < num; i++) {
    // i = 0, 0 < 3 ---> 참
    // 출력 : Hello Javascript 1번째 출력
    // i = 1, 1 < 3 ---> 참
    // 출력 : Hello Javascript 2번째 출력
    // i = 2, 2 < 3 ---> 참
    // 출력 : Hello Javascript 3번째 출력
    // i = 3, 3 < 3 ---> 거짓 => 조건문 종료
    console.log(`Hello Javascript ${i + 1}번째 출력`);
}

for (let i = 1; i <= num; i++) {
    // i = 1, 1 <= 3 ---> 참
    // 출력 : Hello Javascript 1번째 출력
    // i = 2, 2 <= 3 ---> 참
    // 출력 : Hello Javascript 2번째 출력
    // i = 3, 3 <= 3 ---> 참
    // 출력 : Hello Javascript 3번째 출력
    // i = 4, 4 <= 3 ---> 거짓 => 조건문 종료
    console.log(`Hello Javascript ${i}번째 출력`);
}