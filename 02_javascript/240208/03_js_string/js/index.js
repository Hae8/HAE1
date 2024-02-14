let subject1 = "프로그램 입문자를 위한 '자바스크립트'"; // 따옴표를 다르게 해서 작성
let subject2 = '프로그램 입문자를 위한 \'자바스크립트\''; // 이스케이핑 문자(\)를 사용
let subject3 = `프로그램 입문자를 위한 '자바스크립트'`; //백틱(`)을 사용

let msg1 = '그가 말했다. "안녕?"'; // 따옴표를 다르게 해서 작성
let msg2 = "그가 말했다. \"안녕?\""; // 이스케이핑 문자(\)를 사용
let msg3 = `그가 말했다. \"안녕?\"`; //백틱(`)을 사용

let msg4 = '그녀는 생각했다. \'얘 뭐지?\' 그리고 대답했다. \"응.\"'
let msg5 = `그녀는 생각했다. '얘 뭐지?' 그리고 대답했다. "응."`


let name = '해파리'
let birthYear = 2001;
// document.write("<h1>"+ name + "님 안녕하세요</h1>");
document.write(`<h1>${2024 - birthYear}살의 ${name}님 안녕하세요</h1>`);