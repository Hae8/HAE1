/*
제너레이터 : 이터레이터를 반환(yield)하는 함수
generator는 function에 *을 붙여 쓴다.
return 대신에 yield를 사용한다.
*/
function* gen(){
    yield '봄';
    yield '여름';
    yield '가을';
    yield '겨울';
};

let seasons_iterator = gen();
console.log(seasons_iterator.next()); // {value: '봄', done: false}
console.log(seasons_iterator.next()); // {value: '여름', done: false}
console.log(seasons_iterator.next()); // {value: '가을', done: false}
console.log(seasons_iterator.next()); // {value: '겨울', done: false}
console.log(seasons_iterator.next()); // {value: undefined, done: true}
console.log(seasons_iterator) // gen {<closed>}

let seasons_iterator2 = gen();
for (let season of seasons_iterator2){
    console.log(season);
    /*
    봄;
    여름;
    가을;
    겨울;
    */
}