const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const postRouter = require('./post');
const { createToken, join } = require('../controllers/auth');
const { verifyToken } = require("../middlewares")

// POST /v1/auth/join
router.post('/auth/join', join)

// POST /v1/auth/login
router.post('/auth/login', createToken)

router.use('/users', verifyToken, userRouter) // v1뒤에 users를 붙여서 보낸다.

router.use('/posts', postRouter) // v1뒤에 posts를 붙여서 보낸다.

module.exports = router;