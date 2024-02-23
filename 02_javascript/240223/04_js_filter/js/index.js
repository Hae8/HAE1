/* 
    filter() 
    특정 조건에 맞는 요소만 "추출하여, 새로운 배열로 반환."
*/

let scores = [90, 35, 64, 88, 45, 92];

/* if문 사용
let high_score = scores.filter(score => {
    if (score >= 85){
        return score
    }
});
*/

/* if문 사용 - 간략화
let high_score = scores.filter(score => {
    if (score >= 85) return score
});
*/

/* 위의 코드를 이처럼 쓸 수 있다. */
let high_score = scores.filter(score => score >= 85);

console.log(high_score); // [90, 88, 92]

/* 85 미만 점수 -> 인덱스도 같이 확인 */
let low_score = scores.filter((score,idx) => {
    if (score < 85){
        console.log(`index: ${idx}, score: ${score}`);
        /*
        index: 1, score: 35;
        index: 2, score: 64;
        index: 4, score: 45;
        */
    }return score;
})
console.log(low_score); // [90, 35, 64, 88, 45, 92]