let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.5025398, 127.0248679), //지도의 중심좌표.
	level: 14 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

/* 마커 설정하기
// 마커가 표시될 위치입니다 
let markerPosition  = new kakao.maps.LatLng(37.5025398, 127.0248679); 

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null); 
*/

// 마커 클러스터 설정
let clusterer = new kakao.maps.MarkerClusterer({
    map,
    averageCenter: true,
    minLevel: 10,
})

let serviceKey = 'G%2B3AQXhSRTFOF98TfI1maF4vhTdL4E53z%2F%2BZblHspKpOwYIlFiG7AseBvCvAFd%2BEvCVXcXi5IwMTD5k9j3j7sw%3D%3D'
let mobileOS = 'ETC';
let mobileApp = 'appName';
let url = `http://apis.data.go.kr/B551011/GoCamping/basedList`;
url += `?`
url += `MobileOS=${mobileOS}&`
url += `MobileApp=${mobileApp}&`
url += `serviceKey=${serviceKey}&`
url += `_type=json`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        // 원하는 배열(캠핑장 데이터 배열)을 가지고 온다.
        const campingData = data.response.body.items.item;
        console.log(campingData);

        // 테이블에 출력하기
        const table = document.querySelector('table');
        let contents = ``;
        let markers = [];

        campingData.forEach((camp, index) => {
            const mapSetting = makeMapSetting(camp)
            markers.push(mapSetting.marker);

            // 인포윈도우 추가
            kakao.maps.event.addListener(mapSetting.marker, 'mouseover', makeOverListener(map, mapSetting.marker, mapSetting.infowindow));
            kakao.maps.event.addListener(mapSetting.marker, 'mouseout', makeOutListener(mapSetting.infowindow));


            contents += `
            <tr>
                <td>${index + 1}.</td>
                <td>${camp.facltNm}</td>
            </tr>
            `
        });
        console.log(markers);
        clusterer.addMarkers(markers);
        table.innerHTML = contents
    })

    function makeMapSetting(item){
        const obj ={
            marker: new kakao.maps.Marker({
                map,
                position: new kakao.maps.LatLng(item.mapY, item.mapX),
            }),
            infowindow: new kakao.maps.InfoWindow({
                content: item.facltNm
            })
        }
        return obj;
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function () {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function () {
            infowindow.close();
        };
    }