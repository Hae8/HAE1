function introduce(성, 이름, 콜백함수) {
    let 풀네임 = 성 + 이름;
    콜백함수(풀네임);
}

function 만남(name) {
    console.log(`hello, I'm ${name}`);
}

function 이별(name) {
    console.log(`잘가, 지금까지 나는 ${name} 이였어`);
}

introduce('홍', '길동', 만남);

introduce('홍', '길동', (이름) => {
    console.log(`${이름} 입니당`);
})

introduce('홍', '길동', 이별);
