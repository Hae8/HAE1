const { getPosts, uploadPost,afterUploadImg, modifyPost, deletePost } = require('../controllers/post');
const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const imgUpload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) { 
            callback(null, "public/uploads/");
        },
        filename(req, file, callback) {
            const ext = path.extname(file.originalname);
            callback(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

// GET /post - 게시물 전체 목록
router.get("/", getPosts);

// POST /post - 게시물 작성
router.post("/", uploadPost);

// POST /post/img - 이미지 업로드
router.post("/img", imgUpload.single("img"), afterUploadImg);

// PUT /post/:id - 게시물 수정
router.put("/:id", modifyPost);

// DELETE /post/:id - 게시물 삭제
router.delete("/:id", deletePost);

module.exports = router;