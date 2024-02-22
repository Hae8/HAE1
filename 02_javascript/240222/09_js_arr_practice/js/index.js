givenArr = document.querySelector("h1").innerText;
// console.log(givenArr); // 주어진 배열 : [2, 4, 6, 8, 10]

startIndex = givenArr.indexOf("[");
endIndex = givenArr.indexOf("]");
getArr = givenArr.slice(startIndex+1, endIndex);
// console.log(getArr); // 2, 4, 6, 8, 10

getArr_process = getArr.split(", ")
// console.log(getArr_process); // ['2', '4', '6', '8', '10']

let originArr = "<table><tr>"
let tdmaker = ""
    for (let i=0; i<getArr_process.length; i++){
        tdmaker = `<td>${getArr_process[i]}</td>`
        originArr += tdmaker
    };
    originArr += "</tr></table>";

document.querySelector("#origin").innerHTML = originArr

let resultArr = "<table><tr>"
tdSum = 0
    for (let i=0; i<getArr_process.length; i++){
        tdmaker = `<td>${getArr_process[i]}</td>`
        resultArr += tdmaker
    };
    for (let num of getArr_process){
        tdSum += Number(num);
    }
    resultArr += `<td>${tdSum}</td>`
    resultArr += "</tr></table>";

document.querySelector("#result").innerHTML = resultArr

/* 반복되는 부분 함수로 묶어서 코드 줄이기 */