setInterval(() => {
    try {
        throw new Error('서버를 고장내주마!')
    } catch(err) {
        console.error(err); // 에러가 나도 중요한 내용은 실행됩니다
    }
}, 1000)

setInterval(() => {
    console.log('중요한 내용이 매번 실행 중...');
}, 2000)