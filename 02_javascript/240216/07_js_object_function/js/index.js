function makeObj(name, age) {
    let obj = {
        name,
        age,
        team: 'BTS',
        bts,
    };
    return obj;
}

let bts = function() {
    console.log('안녕하세요 BTS 입니다.');
}

let jin = makeObj('김석진', 28);
let kook = makeObj('전정국', 24);
let jimin = makeObj('박지민', 26);
let v = makeObj('김태형', 25);
let rm = makeObj('김남준', 27);
let suga = makeObj('민윤기', 28);
let jHope = makeObj('정호석', 27);

console.log(v);
v.bts();