const [myname, ...info] = ['해파리', 17, '서울'];
console.log(myname, info);

const names = ['해삼', '말미잘', '멍게'];
let students = ['해파리', ...names, ...names];
console.log(students);

const arr = ['사과', '오렌지', '딸기', '수박', '메론'];
// const [사과, 오렌지, fruits] = arr;
// const [사과, 오렌지, ...fruits] = arr;
const [사과, 오렌지, [...fruits]] = arr;
console.log(fruits);

const jellyfish = {
    name: '해파리',
    age: 17,
    region: '서울',
    email: 'hae8@gmail.com'
};
const { name, age, ...rest } = jellyfish;
console.log(rest)
