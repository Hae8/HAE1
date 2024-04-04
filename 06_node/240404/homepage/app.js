require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express:app,
    watch: true,
    autoescape:true
});

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 8001);

app.use(
    morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended : true })
)

// "/" => 메인화면 뿌려주기
app.use('/', indexRouter);
// "/users" => 사용자
app.use('/users', userRouter);
// "/posts" => 게시물

/* 404 처리 */
app.use((req, res, next) => {
    const err = new Error(`${req.url}은 접근할 수 없습니다.`)
    err.status = 404;
    next(err); // 에러 처리 미들웨어로 넘긴다.
})

/* 에러 처리 */
app.use((err, req, res, next) => {
    console.error(err);
    const code = err.status || 500;
    const message = err.status == 404 ? err.message : '서비스 관리자에게 문의해 주세요.'
    res.render('error', { code, message });
    // res.sendFile(path.join(__dirname, './views/error.html'));
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '포트 익스프레스 연결 완료');
})