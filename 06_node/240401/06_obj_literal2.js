let sayHello = function() {
    console.log('안녕하세요');
}
let subject = 'node';

let person = {
    sayBye : function() {console.log('안녕히가세요');},
    sayHello, // 키와 값이 똑같은 경우 이렇게만 써도 인식한다.
    subject,
    [subject+'Info'] : '노드는 자바스크립트 런타임!' // 대괄호를 사용해서 연산부분을 인식시켜야 힌디/
};

person.sayBye();
person.sayHello();
console.log(person.subject);
console.log(person.nodeInfo);
