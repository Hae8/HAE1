const fs = require('fs');

const readStream = fs.createReadStream('readme.txt', { highWaterMark: 16 });
// 16바이트씩 가져와서 복붙을 한다.
const writeStream = fs.createWriteStream('writeme3.txt');

readStream.pipe(writeStream); // pipe() 메서드로 연결하면 여러개의 스트림을 이어서 사용할 수 있다.