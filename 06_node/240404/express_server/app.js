const path = require('path');
const fs = require('fs');

try {
    fs.readdirSync('public/uploads');
} catch (err) {
    console.log('upload 폴더가 없어서 생성합니다.');
    fs.mkdirSync('public/uploads')
}

const express = require('express');
const morgan = require('morgan'); // 요청, 응답을 콘솔에 기록
const multer = require('multer');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

require('dotenv').config(); // .env 파일을 읽어서 process.env에 추가


app.set('port', process.env.PORT || 8000);
/*
if (process.env.NODE_ENV == "development"){
    console.log('이렇게');
} else if (process.env.NODE_ENV == "combined"){
    console.log('응용할 수 있다.');
}
*/

// 미들웨어는 app 내부에서 작성되는 콜백함수! [요청과 응답 사이에 거쳐가는 함수]
// req : 요청 객체, res : 응답 객체, next : 그 다음의 미들 웨어에 대한 액세스 권한을 가지는 함수
// 미들웨어는 여러 개도 가능하다. -> 그래서 순서가 중요하다!!

app.use(
    (req, res, next) => {  // 함수처럼 사용되는 미들웨어이다.
        // console.log(a); // a는 정의되지 않은 변수 -> 에러가 나면 에러처리 미들웨어로 간다.
        console.log('무조건 진행되는 연산');
        next(); // next를 넣어줘야 다음 요청이 진행된다. (send는 send에서 요청이 끝난다.)
    },     // 이렇게 미들웨어를 연결해 쓸 수도 있고, 미들웨어 안에 미들웨어를 넣어서 쓸 수도 있다.

    // req 요청을 받아, 그리고 res에 어떤 응답인지 기록
    // 그래서 해당 요청이 얼마나 걸리는 지 로그에 출력
    // 개발환경이면 어떻게~ 배포환경이면 어떻게~
    // 위 내용이 morgan 하나로 전부 해결!!

    /* 요청, 응답을 콘솔에 기록 */
    morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined'), // dev, combined, tiny, common 등..
    /* 정적 파일 제공*/
    express.static(path.join(__dirname,'public')), // 외부에서 폴더 경로를 유추하지 못하도록 할 수 있다.
    /* 프론트에서 json 데이터를 보냈을 때, 파싱 */
    express.json(),
    /* FORM 데이터를 파싱 */
    // extended : true -> qs라는 패키지 사용
    // extended : false -> 기본 모듈로 queryString 해석
    express.urlencoded({ extended : true }),
    /* 요청(req)에 들어있는 쿠키를 해석해 req.cookies라는 객체에 담아 줌 */
    // cookieParser(('password')) : 서명 된 쿠키는 password를 통해 검증하고 가져올 수 있다.
    // cookieParser((process.env.COOKIESECRET)),
    cookieParser(),
    session({ // 세션은 쿠키를 이용해 저장하기 때문에 꼭 cookieParser() 다음에 있어야 한다.
        resave: false, // req가 들어올 때, 세션 변경이 없어도 다시 저장할까?
        saveUninitialized: false, // 세션에 저장할 내역이 없는데, 초기화 하지 말까?
        secret: process.env.COOKIE_SECRET, // [필수 항목] 비밀키 - 암호화 된 쿠키
        cookie: {
            httpOnly: true // 클라이언트에서 쿠키 확인 불가능 (보안)
        },
        name: 'connect.sid' // 세션 쿠키 이름
    })
);

/* multer 미들웨어 생성 (장착 x) */
const imageUpload = multer({
    storage: multer.diskStorage({ // 파일 저장 위치 및 파일명을 설정
        destination(req, file, done) { // 파일 저장 위치
            done(null, 'public/uploads');
        },
        filename(req, file, done) { // 파일명 // 서버 내에서 파일명이 겹치는 것을 방지하기 위해 새 이름을 지정한다.
            const ext = path.extname(file.originalname) // 파일의 확장자를 변수로 지정
            const newFilename = path.basename(file.originalname, ext) + Date.now() + ext// 파일의 originalname에서 확장자를 제거하고 오늘 날짜와 확장자를 붙여 새이름을 만든다.
            done(null, newFilename);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 보안을 위해 파일 크기(5MB)를 제한한다.
});

/*
app.use((req, res, next) => {
    console.log('미들웨어 실행');
    console.log('내부 미들웨어 실행')(req, res, next);
}); // 미들웨어 안에 미들웨어를 사용하려면 이런 식으로 적어줘야 한다.
*/ 

app.get('/', (req, res) => { // 응답은 딱 한번만 해줘야 하므로 next가 아닌 send를 사용한다.
    /* 쿠키 설정 */
    res.cookie('name', '쿠키의 값', {
        expires: new Date(Date.now() + 10000),
        httpOnly: false,
        path: '/'
    })

    /* 세션 설정 */
    // req.sessionID;
    // req.session.id = '세션의 아이디';
    req.session.name = '세션의 값';
    req.session.save(() => {
        res.sendFile(path.join(__dirname,'views/index.html')); // index.html 뿌려주기
    })
});

app.get('/about', (req, res) => {
    console.log(req.cookies);
    console.log(req.session);
    console.log(req.session.name);
    console.log(req.session.id);
    res.send('어바웃 페이지');
});

app.get('/service', (req, res) => {
    req.session.destroy(); // 세션을 삭제한다.
    res.send('서비스 페이지');
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/upload.html'));
});

app.get('/login', (req, res) => {
    throw new Error('로그인 페이지 없음')
});

app.post('/upload', imageUpload.single('image') ,(req, res) => { // 이미지 업로드 미들웨어 장착
    // DB에서 회원 테이블에 업로드 된 이미지 정보를 추가하여 화면에 뿌린다.
    console.log(req.body.image);
    console.log(req.body.username);
    res.send('OK');
});

/* 정해지지 않은 요청에 대해서 404 에러 처리 */
app.use((req, res, next) => {
    res.status(404).send('404 접근할 수 없는 경로');
    // next(new Error('없는 페이지')); // next로 에러를 전달할 수 있다.
});

/* 에러 처리를 위한 미들웨어 */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('서버에 이상이 생겼으니, 관리자에게 문의해 주세요.');
});

app.listen(app.get('port'), () => {
    console.log(`포트 ${app.get('port')}번 익스프레스 서버 실행`);
});