const getUser = (id, password) => {
    return new Promise((resolve, reject) => {
        if (id == '해파리' && password == '1234') {
            const user = {
                name: '해파리',
                age: 5
            }
            resolve(user);
        } else {
            reject('아이디 또는 비밀번호가 틀렸습니다.');
        }
    })
};

const modifyAge = (user, age) => {
    return new Promise((resolve, reject) => {
        if (user.name = '해파리') {
            user.age = age;
            resolve('success')
        } else {
            reject('유저 이름이 틀렸습니다.');
        }
    })
};

getUser('해파리', 1234)
    .then((result) =>  modifyAge(result,7))
    .then ((result) => console.log(result))
    .catch((err) => console.log(err));
    // then에는 resolve 결과가, catch에는 reject 결과가 들어온다.