// let kor_score = Number(prompt('국어 점수'));
// let eng_score = Number(prompt('영어 점수'));
// let math_score = Number(prompt('수학 점수'));

let kor_score = 70
let eng_score = 80
let math_score = 90

console.log(
    typeof(kor_score),
    typeof(eng_score),
    typeof(math_score)
);

let avg = (kor_score + eng_score + math_score) / 3;
// let avg = (Number(kor_score) + Number(eng_score) + Number(math_score))/3;


if (avg >= 60) {
    document.write('<h1>합격</h1>')
    document.write('<h2>축하합니다!</h2>');
} else {
    document.write('<h1>불합격</h1>');
} 
//if (avg < 60) {document.write('<h1>불합격</h1>');}

let result;

if (avg >= 90) result = '수';
else if (avg >= 80) result = '우';
else if (avg >= 70) result = '미';
else if (avg >= 60) result = '양';
else result = '가';

let msg = `<div>당신의 성적은? ${result}</div>`;
document.write(msg);

let readHbnb = true;
let readKjpj = false;

if (readHbnb == true && readKjpj == true){
    document.write('참 잘했어요')
} 
// &&처럼 두개쓰면 앞의 값만 체크, &처럼 한개쓰면 두번째 값까지 체크

if (readHbnb == true | readKjpj == true){
    document.write('하나라도 읽어서 다행')
} 