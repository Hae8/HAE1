require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { sequelize } = require('./models');
const User = require('./models/user');
const Post = require('./models/post');
const Op = require('sequelize').Op;

const app =  express();

try {
    fs.readdirSync('public/img');
} catch (err) {
    console.error('img 폴더가 없어서, 생성합니다');
    fs.mkdirSync('public/img');
};

nunjucks.configure('views', {
    express: app,
    watch: true,
    autoescape: true
});

/* 시퀄라이즈 초기화 + (DB에 필요한 테이블을 생성해준다.) */
sequelize.sync({ force : false }) // true 이면 강제로 덮어쓰기 된다.
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch (err => {
        console.error(err);
    });

app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended: true })
);

/*
    GET / -> 메인 페이지 로드 (index.html)
    POST /users/img -> 프로필 사진 업로드
*/

// GET --------------------------------------------------------------------------------

// user 데이터 전체와 post 데이터 전체가 화면에 나올 것
app.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: ['userId', 'name', 'profileImg'],
            order: [[ 'createdAt', 'ASC' ]] // 오름차순 정렬
        });
        const posts = await Post.findAll({
            order: [['createdAt', 'DESC']] // 내림차순 정렬
        });
        res.render('index', { users, posts });
    } catch (err) {
        next(err);
    }
});

// 게시물 --------------------------------------------------------------------------------

app.post('/posts', async (req, res, next) => {
    try {
        const writer = await User.findOne({
            where: {
                userId: { [Op.eq]: req.body.postData.userId }
            }
        });
        if (writer) {
            await Post.create( req.body.postData );
            return res.send('등록 완료')
        }
        res.send('없는 사용자')
    } catch (err) {
        console.error(err);
        next(err);
    }
});

app.put('/posts/:id', async(req, res, next) => {
    try{
        const postId = req.params.id;
        const content = req.body.content;
        await Post.update({
            content: req.body.content
        },
    {
        where : { id: req.params.id }
    });
    res.send('수정 완료')
    } catch (err) {
        console.error(err);
        next(err);
    }
});

app.delete('/posts/:id', async(req, res, next) => {
    try{
        const postId = req.params.id;
        await Post.destroy({
            where: { id: { [Op.eq] : postId}}
        })
        res.send('삭제 완료')
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 유저 --------------------------------------------------------------------------------

// POST /users -> 유저 등록 [개발 끝~]
app.post('/users', async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                userId: { [Op.eq]: req.body.userData.userId }
            }
        });
        if (exUser) {
            console.log(exUser.deletedAt);
            await exUser.update(req.body.userData); // 이미 존재하는 유저 아이디라면 수정을 한다.
            res.send('수정 완료');
        } else {
            await User.create(req.body.userData);
            res.send('등록 완료');
        }
    } catch (err) {
        next(err);
    }
});

// MULTER를 설치하고, 싱글 이미지 업로드 될 수 있도록 해보기
// 업로드 경로 : public/img
const profileUpload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'public/img/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize : 5 * 1024 * 1024}
});

// 프로필 사진 등록 [개발 끝~]
app.post('/users/img', profileUpload.single("profileImage"), (req, res) => {
    res.send(req.file.filename);
});

app.delete('/users/:id', async (req, res, next) => { // 실제 삭제가 된 것이 아니라 deletedAt이 업데이트 되는 소프트 삭제
    console.log(req.params.id);
    try {
        await User.destroy({
            where: { userId: { [Op.eq]: req.params.id }}
        });
        res.send('OK')
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 에러 처리 --------------------------------------------------------------------------------

app.use((req, res, next) => {
    const err = new Error('존재하지 않는 페이지 경로')
    err.status = 404;
    next(err);
})

app.use((err, req, res ,next)=>{
    res.send('에러');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port') + "번 포트 연결 완료");
});