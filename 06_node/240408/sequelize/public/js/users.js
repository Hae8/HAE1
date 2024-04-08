const userForm = document.querySelector('#user-form');

userForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const userId = e.target.userId.value;
    const name = e.target.name.value;
    const password = e.target.password.value;

    if (!userId || !name || !password) {
        alert('필수 입력값을 모두 입력해주세요.')
        return
    }

    let profileImage = e.target.profileImage.files[0];
    let userData =  {
        userId,
        name,
        password,
    };

    if (profileImage) { // 이미지가 있는 경우 
        const formData = new FormData();
        formData.append('profileImage', e.target.profileImage.files[0]); // 이미지 경로 일치하는지 확인
        // 이미지 업로드 하고, 저장된 이미지 파일 명을 반환
        const response = await axios.post('/users/img', formData);
        console.log(response);
        // profileImage = 저장된 이미지 파일 명
        profileImage = response.data;
        userData.profileImg = profileImage
        };

    try {
        // POST /users userData
        const response = await axios.post('/users', { userData }); // 이미지 파일 명 또는 null 로 받아온 이미지 응답
        if (response.data == "등록 완료")  {
            alert('등록이 완료되었습니다.');
            window.location.reload();
        } else if (response.data == "수정 완료") {
            alert('수정이 완료되었습니다.');
            window.location.reload();
        } 
    } catch (err) {
        console.error(err);
    }
    e.target.reset();
});

const delBtns = document.querySelectorAll('.del_btn');
delBtns.forEach(btn=>{
    btn.addEventListener('click', async (e) => {
        const userId = e.target.dataset.userId;
        const response = await axios.delete(`/users/${userId}`);
        if (response.status == 200) { // 삭제가 정상적으로 되었으면
            window.location.reload();
        } else {
            alert('삭제에 실패했습니다.')
        }
    });
});