window.onload = () => getUser(); // 페이지가 로드되면 getUser 함수 실행

/* 사용자 추가 이벤트 */
const form = document.querySelector('form'); // form 태그 선택
form.addEventListener('submit', async (e) => { // form 태그에 submit 이벤트 발생시
    e.preventDefault(); // submit 이벤트의 기본 동작을 막음
    const userName = e.target.userName.value; // form 태그의 userName 태그의 value 값을 가져옴
    if (!userName) {
        alert('이름을 입력해 주세요'); // 만약 userName이 없다면 alert로 이름을 입력해주세요 출력 후 함수 종료
        return
    }
    try{
        // axios를 이용해 NODE 서버 /user 경로로 post 요청 (userName을 body로 보냄)
        const response = await axios.post('/user', { userName });
        // post 요청이 성공하면 response 출력 및 getUser 함수 실행
        console.log(response); // 등록 성공
        getUser(); // 유저를 가지고 오면 화면에 뿌려준다.
    } catch (err) {
        console.error(err)
    }
    e.target.reset(); // form 태그 입력값 초기화
});

/* 사용자 목록을 가져오는 getUser 함수 */
const getUser = async () => {
    try{
        // axios를 이용해 NODE 서버 /user 경로로 get 요청 (사용자 목록을 가져옴)
        const response = await axios.get('/user');
        // get 요청이 성공하면 response 출력
        console.log(response);
        // userObject에 response.data에 있는 사용자 목록을 할당
        const userObject = response.data;

        // list 태그 선택
        const list = document.querySelector('#list');
        // list 태그 초기화
        list.innerHTML = ''; // 똑같은 것이 또 쌓이지 않도록 리스트 초기화

        // userObject에 있는 사용자 목록을 순회하며 사용자 목록을 화면에 출력
        Object.keys(userObject).map((key) => { // Object.keys(userObject) 배열을 반복 돌린다.
            // 사용자별 div 태그 생성
            const userDiv = document.createElement('div'); // 각각의 key값에 대한 userDiv를 만들고
            // 사용자 이름 span 태그 생성
            const userSpan = document.createElement('span') // userSpan을 만들어서
            userSpan.textContent = userObject[key] // key 값의 value를 userSpan안에 넣는다.

            // 사용자 수정 버튼 생성
            const editBtn = document.createElement('button'); // 수정 버튼을 만들고
            editBtn.textContent = '수정';
            // 수정 버튼 클릭시, prompt로 새로운 이름을 입력받고, axios를 이용해 사용자 이름 수정
            editBtn.addEventListener('click', async () => {
                const newName = prompt('바꿀 이름을 입력하세요');
                if (!newName) {
                    alert('이름을 입력하지 않아, 수정이 취소되었습니다.');
                    return
                }
                try{
                    await axios.put(`/user/${key}`, { newName }); // '/user/ + key'를 해서 백으로 전달한다.
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            })

            // 사용자 삭제 버튼 생성
            const delBtn = document.createElement('button'); // 삭제 버튼을 만들어서
            delBtn.textContent = '삭제';
            // 삭제 버튼 클릭시, axios를 이용해 사용자 삭제
            delBtn.addEventListener('click', async () => {
                const delconfirm = confirm('정말 삭제하시겠습니까?');
                if (!delconfirm) {
                    alert('삭제가 취소되었습니다.');
                    return
                }
                try{
                    await axios.delete(`/user/${key}`); // '/user/ + key'를 해서 백으로 전달한다.
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            })

            // 사용자별 div 태그에 사용자 이름 span 태그, 수정 버튼, 삭제 버튼 추가
            userDiv.appendChild(userSpan) // userDiv에 userSpan을 자식으로 넣는다.
            userDiv.appendChild(editBtn) // userDiv에 editBtn을 자식으로 넣는다.
            userDiv.appendChild(delBtn) // userDiv에 delBtn을 자식으로 넣는다.
            // list 태그에 사용자별 div 태그 추가
            list.appendChild(userDiv) // 리스트에 userDiv를 자식으로 넣는다.
        });
    } catch (err) {
        console.error(err);
    }
    
}