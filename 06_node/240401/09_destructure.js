/*
var person = {
    status: {
        name: '짱구',
        age: 5
    },
    getAge () {
        this.status.age++;
        return this.status.age;
    }
};

var getAge = person.getAge;
var name = person.status.name;
var age = person.status.age;

console.log (name, age, getAge); // 짱구 5 [Function: getAge]
*/

const person = {
    status: {
        name: '짱구',
        age: 5
    },
    getAge () {
        this.status.age++;
        return this.status.age;
    }
};

const { getAge, status: { name, age } } = person; // ⭐⭐⭐ 중요! ⭐⭐⭐
// var getAge = person.getAge;
// var name = person.status.name;
// var age = person.status.age;

console.log (name, age, getAge); // 짱구 5 [Function: getAge]