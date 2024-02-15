let num = prompt("숫자를 입력하세요.")
let i = 1

if (isNaN(num)){
    console.log("유효한 숫자를 입력하세요.");
} else {
    while (i <= num){
        console.log(`${i}`);
        i++;
    }
}
