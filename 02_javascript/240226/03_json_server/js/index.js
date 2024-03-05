const cmtInput = document.querySelector('#commentInput');
const addCmtBtn = document.querySelector('#addCommentBtn');
const cmtList = document.querySelector('#commentList');
    
// 초기 댓글 가져오기
let getComment = () => {
    fetch('http://localhost:3000/comments')
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error('서버 오류 : ' + response.status);
        }).then(comments => {
            // 데이터 화면에 곱게 뿌려주기
            cmtList.innerHTML = '';
            comments.forEach(comment => {
                const cmtElement = createCmtElement(comment);
                cmtList.appendChild(cmtElement);
            })
        }).catch(error => console.error('초기 댓글 가져오기 오류', error));
}

// 초기 댓글 화면 구성
function createCmtElement(comment) {
    const li = document.createElement('li');
    li.classList.add('comment');
    li.innerHTML = `
                    <div class='comment-box'>
                        <div>${comment.name} : ${comment.msg} - ${comment.date}</div>
                        <div class='actions'>
                            <button class="edit">수정</button>
                            <button class="delete">삭제</button>
                        </div>
                    </div>
                    <div class='edit-box'>
                        <input type='text' value='${comment.msg}' />
                        <button class='save'>저장</button>
                    </div>
                    `;
    const editBtn = li.querySelector('.edit');
    const deleteBtn = li.querySelector('.delete');
    const commentBox = li.querySelector('.comment-box');
    const editBox = li.querySelector('.edit-box');
    const saveBtn = editBox.querySelector('.save');
    const newCmtInput = editBox.querySelector('input');

    editBox.style.display = 'none';

    editBtn.addEventListener('click', () => {
        commentBox.style.display = 'none';
        editBox.style.display = 'block';
    })

    saveBtn.addEventListener('click', () => {
        comment.msg = newCmtInput.value;
        fetch('http://localhost:3000/comments/' + comment.id, {
            method: "PUT",
            headers: { 'Content-type' : 'application/json'},
            body: JSON.stringify(comment)
        }).then(response => {
            if (response.ok) getComment();
            else throw new Error('서버 오류 : ' + response.status);
        }).catch(error => console.error('수정 오류', error));
    })


    deleteBtn.addEventListener('click', () => {
        fetch('http://localhost:3000/comments/'+ comment.id, {
            method: "DELETE"
        }).then(response => {
            if (response.ok) getComment();
            else throw new Error('서버 오류 : ' + response.status);
        }).catch(error => console.error('삭제 오류', error));
    })

    return li;
}

addCmtBtn.addEventListener('click', () => {
    const cmtMsg = cmtInput.value.trim(); // trim(): 앞뒤 공백 제거
    console.log(cmtMsg);
    if (cmtMsg !== '') {
        const cmtObj = { msg: cmtMsg };
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(cmtObj)
        }).then(response => {
            if (response.ok) getComment();
            else throw new Error('서버 오류 : ' + response.status);
        }).catch(error => console.error('댓글 쓰기 오류', error));
    }
})

getComment();