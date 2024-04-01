const getUser = (id, password) => {
        if (id == '해파리' && password == '1234') {
            const user = {
                name: '해파리',
                age: 5
            }
            return(user);
        } else {
            return('아이디 또는 비밀번호가 틀렸습니다.');
        }
};

const modifyAge = (user, age) => {
        if (user.name = '해파리') {
            user.age = age;
            return('success')
        } else {
            return('유저 이름이 틀렸습니다.');
        }
};

let result2 = modifyAge(getUser('해파리', 1234),7)
console.log(result2);

// 프로미스 방식을 사용하지 않았을 경우 이와 같이 쓰게 된다.
// 가독성이 나쁘고, 함수가 실행되는 동안 블로킹 되는 문제가 있다.