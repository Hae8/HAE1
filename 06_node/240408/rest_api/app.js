require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const { sequelize } = require('./models');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');

const app = express();

try{
    fs.readdirSync("public/uploads");
} catch (err) {
    console.log('폴더를 생성합니다.');
    fs.mkdirSync("public/uploads");
}

sequelize.sync({ force: false })
    .then(() => {
        console.log('DB 연결 성공');
    })
    .catch (err => {
        console.error(err);
    });

app.set('port', process.env.PORT || 8000);

app.use(
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended: true })
);

app.use('/auth', authRouter);
app.use('/post', postRouter);
// app.use('/user', userRouter);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url}은/는 없는 경로입니다.`);
    error.status = 404;
    next(error);
})

app.use((err, req, res, next) => {
    console.error(err);
    res.json({
        code: err.status || 500,
        message: err.message || '서버 에러'
    })
})

app.listen(app.get('port'), () => {
    console.log(app.get('port') + "번 포트 연결 완료");
});