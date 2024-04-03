const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 학습을 위해 복잡하게 데이터베이스를 연결하지 않고 사용자 정보를 저장할 객체 생성
const user = {}; // 임시 데이터베이스

// 서버 생성
http.createServer(async(req, res) => {
    console.log(req.method, req.url); // 요청 메서드와 url 확인

    /* GET 메서드일 때 */
    if (req.method === 'GET'){
        // [GET, http://localhost:8000/] 메인 페이지 화면 요청
        if (req.url === '/'){
            console.log('index.html을 응답합니다.');
            const data = await fs.readFile(path.join(__dirname,'index.html')) // 파일을 전부 가져올 떄 까지 대기한다.
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            return res.end(data);
            // [GET, http://localhost:8000/about] about 페이지 화면 요청
        } else if (req.url === '/about'){
            console.log('about.html을 응답합니다.');
            const data = await fs.readFile(path.join(__dirname,'about.html')) // 파일을 전부 가져올 떄 까지 대기한다.
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            return res.end(data);
            // [GET, http://localhost:8000/user] 사용자 정보 JSON 객체 요청
        } else if (req.url === '/user'){
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
            return res.end(JSON.stringify(user));
            // [GET, 기타] 해당 파일이 존재하면 파일을 읽어서 응답
            // [GET, 기타] 해당 파일이 존재하지 않으면 404 NOT FOUND 응답
        } else {
            try{
                console.log(req.url);
                const data = await fs.readFile(path.join(__dirname, req.url))
                return res.end(data);
            } catch (err) {
            console.log(err);
            }
            res.writeHead(404);
            return res.end('NOT FOUND')
        }

    /* POST 메서드일 때 */
    } else if (req.method === 'POST') {
        // [POST, http://localhost:8000/user] 사용자 정보 등록
        if (req.url === '/user') {
            console.log('사용자 등록 확인');
            let body = '';
            req.on('data', (data) => {
                console.log(data);
                body += data; // 버퍼로 들어오는 데이터를 body라는 문자열에 넣는다.
            })
            req.on('end', () => {
                const { userName } = JSON.parse(body);
                console.log(userName);
                const id = Date.now();
                user[id] = userName;
                console.log(user);
                res.writeHead(201);
                res.end('등록 성공');
            })
        }
    
    /* PUT 메서드일 때 */
    } else if (req.method === 'PUT') {
        // [PUT, http://localhost:8000/user/1777815615] 해당 아이디를 가지고 있는 유저의 이름 변경
        if (req.url.startsWith('/user/')){
            // console.log(req.url);
            const id = req.url.split('/')[2]; // req.url를 /로 나눈 3번째가 key값
            let body = '';
            req.on('data', (data) => {
                console.log(data);
                body += data; // 버퍼로 들어오는 데이터를 body라는 문자열에 넣는다.
            })
            req.on('end', () => {
                const { newName } = JSON.parse(body);
                user[id] = newName;
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                return res.end(JSON.stringify(user)); // 수정이 잘 되었으면 user를 통째로 보낸다.
            })
        }
    
    /* DELETE 메서드일 때 */
    } else if (req.method === 'DELETE'){
        // console.log(req.url);
        // [DELETE, http://localhost:8000/user/1777815615] 해당 아이디를 가지고 있는 유저 삭제
        if (req.url.startsWith('/user/')){
            const id = req.url.split('/')[2]; // req.url를 /로 나눈 3번째가 key값
            delete user[id];
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify(user)); // 삭제가 잘 되었으면 user를 통째로 보낸다.
        }
    }
}).listen(8000, () => {
    console.log('8000번 포트로 서버 연결');
})