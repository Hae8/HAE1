let obj = {
    name: '해파리',
    major: '해양학',
    grade: 3

}

let json = JSON.stringify(obj);
console.log(obj); 
console.log(json); // {"name":"해파리","major":"해양학","grade":3}

let str = `{"name":"날파리","major":"항공학","grade":3}`;
let obj2 = JSON.parse(str);
console.log(obj2);
