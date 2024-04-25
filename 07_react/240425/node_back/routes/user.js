const express = require('express');
const router = express.Router();
const { getUser, modifyUser, deleteUser, follow, unfollow, getFollowers, getFollowings } = require('../controllers/user')
const { verifyToken } = require("../middlewares")

// GET /v1/users/:id - 특정 회원 조회 (로그인 X)
router.get('/:id', getUser)

// PATCH /v1/users - 회원 정보 수정
router.patch('/', verifyToken, modifyUser)

// DELETE /v1/users/ - 회원 정보 삭제
router.delete('/', verifyToken, deleteUser)

// POST /v1/users/follow - 특정 회원 팔로우하기
router.post('/follow', verifyToken, follow)

// DELETE /v1/users/follow  - 특정 회원 언팔로우하기
router.delete('/follow', verifyToken, unfollow)

// GET /v1/users/followers/:id  - 특정 회원을 팔로우하는 사람들 조회 (로그인 X)
router.get('/followers/:id', getFollowers)

// GET /v1/users/followings/:id GET - 특정 회원이 팔로우하는 사람들 조회 (로그인 X)
router.get('/followings/:id', getFollowings)

module.exports = router;