const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const postRouter = require('./post');
const { createToken, join, refreshToken, kakaoLogin } = require('../controllers/auth');
const passport = require('passport');

// POST /v1/auth/join 
router.post('/auth/join', join);

// POST /v1/auth/login 
router.post('/auth/login', createToken);

// 카카오 로그인
router.get('/auth/kakao', passport.authenticate('kakao'));
router.get('/auth/kakao/callback', kakaoLogin);

// 한 시간 경과 후 로그인이 없어짐
router.get('/auth/refresh', refreshToken);

// USE /v1/users
router.use('/users', userRouter); // v1뒤에 users를 붙여서 보낸다.

// USE /v1/posts
router.use('/posts', postRouter); // v1뒤에 posts를 붙여서 보낸다.

module.exports = router;