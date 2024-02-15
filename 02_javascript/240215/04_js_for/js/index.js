let num;

    for (let i = 0; i<3; i++) {
        console.log(i);
        num = Number(prompt('점수를 입력하세요'));
        if (num >= 60) {
            console.log('합격입니다.');
        } else {
            console.log('불합격입니다.');
        }
    }