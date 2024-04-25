const express = require('express');
const router = express.Router();
const { getPosts, uploadPost, uploadImg, modifyPost, deletePost } = require('../controllers/post');
const { verifyToken } = require("../middlewares")
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "public/uploads")
    },
    filename(req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
});
const limits = { fileSize: 10 * 1024 * 1024 };
const imgUpload = multer({
    storage,
    limits
});

// GET /v1/posts/ - 전체 게시물 조회 (로그인 X)
// GET /v1/posts?hashtag= - 해시태그 검색 게시물 조회 (로그인 X)
// GET /v1/posts?userId= - 특정 작성자의 게시물 조회 (로그인 X)
router.get('/', getPosts)

// POST /v1/posts/ - 게시물 작성
router.post('/', verifyToken, uploadPost)

// POST /v1/posts/image - 게시물 이미지 업로드
router.post('/image', verifyToken, imgUpload.single('img'), uploadImg)

// PUT /v1/posts/:id - 특정 게시물 수정
router.put('/:id', verifyToken, modifyPost)

// DELETE /v1/posts/:id - 특정 게시물 삭제
router.delete('/:id', verifyToken, deletePost)


module.exports = router;