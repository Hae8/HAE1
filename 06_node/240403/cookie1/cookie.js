const http = require('http');

http.createServer((req, res) => {
    console.log(req.method, req.url, req.headers.cookie);

    if (req.url == '/cook') {
        res.writeHead(200, {
            'Content-type' : 'text/html; charset=utf-8',
            'set-cookie' : 'mycookie=test' // 쿠키가 만들어졌다! - 주소가 바뀌어도 쿠키는 계속 보내진다
        });
        res.end('쿠키를 구웠습니다.');
    } else if (req.url == '/eat') {
        res.writeHead(200, {
            'Content-type' : 'text/html; charset=utf-8'
        });
        res.end('쿠키가 있나요?');
    }
}).listen(8000, () => {
    console.log('8000 포트 서버 연결');
})