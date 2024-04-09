const obj1 = {
    key1: 10,
    key2: "안녕",
    key3: {
        easy: true
    }
};

const obj2 = obj1; // 주소값 복사
obj1.key1 += 1;
console.log('obj1', obj1);
console.log('obj2', obj2);

const obj3 = {...obj1}; // 객체 복사 (얕은 복사 - 객체 내의 객체는 주소값을 복사한다.)
const obj4 = JSON.parse(JSON.stringify(obj1)); // 문자열로 만들었다가 객체로 변환하는 객체 복사 (깊은 복사 - 객체 전체를 새롭게 복사)
obj1.key1 += 1;
obj1.key3.easy = false;
console.log('obj1', obj1);
console.log('obj2', obj2);
console.log('obj3', obj3);
console.log('obj4', obj4);