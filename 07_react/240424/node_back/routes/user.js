const express = require('express');
const { modifyUser, deleteUser } = require('../controllers/user')
const router = express.Router();

// PATCH /v1/users
router.patch('/', modifyUser)

router.delete('/', deleteUser)
module.exports = router;
/*
router.get('/users', getUser)
router.post('/users', 회원가입)
router.patch('/users', 회원 정보 수정)
router.delete('/users', 회원 삭제)

router.get('/users/follow', 회원 팔로우)
router.get('/users/unfollow', 회원 언팔로우)

router.get('/users/followers', 내 팔로워 목록 조회)
router.get('/users/followings', 내 팔로잉 목록 조회)

router.get('/users/:id', 특정회원조회)

router.get('/posts', 게시물 전체 조회)
*/

