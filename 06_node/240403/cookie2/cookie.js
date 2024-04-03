const http = require('http');
const fs = require('fs').promises;
const path = require('path');

/* parseCookies 함수 - 쿠키를 ; 기준으로 나누고, = 기준으로 나누어 객체로 만드는 함수 */
const parseCookies = (cookie = '') => {
    return cookie
        .split(';')
        .map(v => v.split("="))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
}

http.createServer(async(req, res) => { // 헤더즈에서 쿠키를 가져온다
    console.log(req.headers.cookie);
    const cookies = parseCookies(req.headers.cookie); // 요청이 들어오면 무조건 실행
    console.log(cookies);

    if (req.url.startsWith('/login')){
        /* 원래는 POST 요청이어야 하고, 여기 사용자 조회 */
        const url = new URL(req.url, 'http://localhost:8000')

        // GET 요청의 파라미터 name 값 확인
        console.log(url.searchParams.get('name'));
        userName = url.searchParams.get('name')

        // 쿠키의 유효 시간을 현재 시간에서 +5분으로 설정
        const expires = new Date(); // 현재 시간 정보
        expires.setMinutes(expires.getMinutes() + 5); // 현재 시간에서 5분을 더한 값으로 세팅

        // 쿠키를 설정하고, 리다이렉트를 진행
        res.writeHead(302, {
            'Location' : '/',
            'set-cookie' : `userName=${encodeURIComponent(userName)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
            // Expires : 쿠키의 만료 기한 설정 (기한 초과 시 브라우저는 쿠키를 제거)
            // HttpOnly : 자바스크립트에서 쿠키에 접근할 수 없도록 한다. (프론트에서 쿠키 조작이 불가능해진다.)
            // Path : 쿠키가 전송될 URL 지정 (/로 설정하면 사이트 전체에서 사용 가능)
        }) 
        return res.end();
    } else if (req.url === '/' && cookies.userName) { // 로그인 된 유저인지 확인
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(`${cookies.userName}님 안녕하세요!`)
    } else if (req.url === '/'){
        try {
            const data = await fs.readFile(path.join(__dirname, 'cookie.html')) // 로그인 화면
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            return res.end(err.message);
        }
    } else if (req.url === '/logout'){
        return res.writeHead(302, {
            'Location' : '/',
            'set-cookie' : `userName=; Max-age=0`
        }) 
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end('NOT FOUND');
    }

}).listen(8000, () => {
    console.log('8000번 포트 연결');
})