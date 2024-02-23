const btn = document.querySelector('button');
const result = document.querySelector('#result');

function* train_gen(){
    yield "당고개";
    yield "상계";
    yield "노원";
    yield "창동";
    yield "쌍문";
    yield "수유(강북구청)";
    yield "미아(서울사이버대학)";
    yield "미아사거리";
    yield "길음";
    yield "성신여대입구(돈암)";
    yield "한성대입구(삼선교)";
    yield "혜화(서울대학교병원)";
    yield "동대문";
    yield "동대문역사문화공원";
    yield "충무로";
    yield "명동";
    yield "회현(남대문시장)";
    yield "서울역";
    yield "숙대입구(갈월)";
    yield "삼각지";
    yield "신용산";
    yield "이촌(국립중앙박물관)";
    yield "동작(현충원)";
    yield "총신대입구(이수)";
    yield "사당";
}

let subway = train_gen();
btn.addEventListener('click', () => {
    let station_name = subway.next(); 
    console.log(station_name); // {value: '당고개', done: false} ... 

    if (station_name.done){
        btn.disabled = true;
        result.innerText = "종점입니다.";
    } else {
        result.innerText = station_name.value;
    }

});