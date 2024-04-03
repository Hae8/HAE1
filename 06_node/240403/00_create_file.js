const fs = require('fs').promises;
const constants = require('fs').constants;

async function createFolder() {
    try {
        await fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('폴더 없음');
            await fs.mkdir('./folder');
            console.log('폴더 만들기 성공');
        } else (err) => {
            console.error(err);
        }
    }
}

async function createFile() {
    try {
        const fd = await fs.open('./folder/file.js', 'w');
        console.log('빈 파일 만들기 성공', fd);
        await fs.rename('./folder/file.js', './folder/newfile.js');
        console.log('이름 바꾸기 성공');
    } catch (err) {
        console.error(err);
    }
}
createFolder();
createFile();