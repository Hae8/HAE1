let regex = /[a-z0-9]/g; // g를 붙이면 전역범위로 설정이 된다.
let id_regex = /[a-z0-9]{6,15}/;
let user_id = 'dlwlrma0311';

console.log(regex.exec(user_id)); // 조건에 부합하는 가장 첫 번째 결과를 리스트로 반환
    // [ 'd', index: 0, input: 'dlwlrma0311', groups: undefined ]
console.log(user_id.match(regex)); // 조건에 부합하는 가장 첫 번째 결과를 리스트로 반환
    /*
    [
        'd', 'l', 'w', 'l',
        'r', 'm', 'a', '0',
        '3', '1', '1'
    ]
    */

console.log(user_id.search(regex)); // 조건에 부합하는 가장 첫 번째 결과를 인덱스로 반환
    // 0

console.log(id_regex.test(user_id)); // true

if (id_regex.test(user_id)){
    console.log('아이디 사용 가능');
} else {
    console.error('아이디 사용 불가능');
} // 아이디 사용 가능

/* -------------------------------------------------------------------- */

let msg = '안녕하세요. Hello, 만나서 반갑습니다. Nice to meet you. 정규식은 참 편하네요!'
let msg_regex = /[^가-힣!]+/g
// msg = msg.replace(msg_regex, '')
// console.log(msg);
let arr = msg.split(msg_regex)
console.log(arr); // [ '안녕하세요', '만나서', '반갑습니다', '정규식은', '참', '편하네요!' ]