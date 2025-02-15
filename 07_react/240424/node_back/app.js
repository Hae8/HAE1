require('dotenv').config(); // .env 파일을 읽어서 process.env에 추가
const express = require('express'); // express 모듈
const morgan = require('morgan'); // morgan(로그) 모듈
const path = require('path'); // 경로 설정 모듈
const session = require('express-session'); // 세션 모듈
const cors = require('cors'); // cors 모듈
let corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true
}
const passport = require('passport'); // 패스포트 모듈
const passportConfig = require('./passport'); // 패스포트 설정 (자체)
passportConfig();

const apiRouter = require('./routes'); // 라우터 경로 설정 (자체)

/* 시퀄라이즈 세팅 */
const { sequelize } = require('./models'); // 시퀄라이즈 모델 설정 (자체)
sequelize.sync({ force: false }) // 서버 실행 시 MySQL과 연동
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });
const app = express();
app.set('port', process.env.PORT || 8000);

/* 모듈 세팅 */
app.use(
    cors(corsOptions),
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended: false }),
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true, 
            secure: false,
        },
    }),
    passport.initialize(),
    passport.session(),
)

/* 경로 설정 */
app.use('/v1', apiRouter); // 8000번 포트 뒤에 v1이 붙으면 이동

/* 404 에러 설정 */
app.use((req, res, next) => {
    const err = new Error(`없는 경로 [${req.method} ${req.url}]`);
    err.status = 404;
    next(err);
})

/* 에러처리 미들웨어 */
app.use((err, req, res, next) => {
    console.error(err);
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.json({
        code: err.status || 500,
        message: err.message || '서버 에러 발생'
    })
})

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 서버 실행`);
})