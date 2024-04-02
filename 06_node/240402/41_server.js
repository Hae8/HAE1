const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./index.html')
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(data);
    } catch (err) {
        console.error(err);
    }
}).listen(8000, () => {
    console.log('8000 서버가 정상적으로 연결되었습니다.');
});