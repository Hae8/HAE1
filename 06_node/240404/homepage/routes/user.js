const express = require('express');
const router = express.Router();
const path = require('path');

router.route('/')
    // GET users/ - "사용자 페이지 출력"
    .get((req, res) => {
        res.send('사용자 페이지');
    })
    // POST users/ - "사용자 페이지 출력"
    .post((req, res) => {
        res.send('사용자 등록');
    })
    // PUT users/ - "사용자 페이지 출력"
    .put((req, res) => {
        res.send('사용자 수정');
    })
    // DELETE users/ - "사용자 페이지 출력"
    .delete((req, res) => {
        res.send('사용자 삭제');
    })

// GET /users/detail/ - "사용자 페이지 출력"
router.get('/detail', (req, res) => { // 위에서부터 순차적으로 실행된다는 점에 유의해서 만들어야 한다.
    res.send(`내 정보 상세 조회`);
});

// GET / - "사용자 아이디 출력"
router.get('/:id', (req, res) => {
    console.log('req.params: ', req.params);
    console.log('req.query: ', req.query);
    res.send(`${req.params.id}를 통한 사용자 정보 조회`);
});


module.exports = router;