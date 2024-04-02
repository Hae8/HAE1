const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err) => {
        if (err.code === 'ENOENT') {
            console.log('폴더 없음');
            return fs.mkdir('./folder');
            }
        return Promise.reject(err);
        })
    .then(() => {
        console.log('폴더 만들기성공');
        return fs.open('./folder/file.js', 'w');
    })
    .then((fd) => {
        console.log('빈 파일 만들기성공', fd);
        return fs.rename('./folder/file.js', './folder/newfile.js');
    })
    .then(() => {
        console.log('이름 바꾸기성공');
    })
    .catch((err) => {
        console.error(err);
    });

fs.stat('./folder')
    .then((stats) => {
        console.log(stats);
    })
    .catch((err) => {
        console.error(err);
    });

fs.readdir('./folder') // 폴더 내용 확인
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        if (dir[0] == 'newfile.js') {
            return fs.unlink('./folder/' + dir[0]); // 파일 삭제 ? 에러발생
            }
        })
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder'); // 폴더 삭제 ? 에러발생
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.error(err);
    });   