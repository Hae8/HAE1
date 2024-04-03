const fs = require('fs').promises;

async function deleteFolder() {
    try{
        const dir = await fs.readdir('./folder');
        console.log('폴더내용 확인',dir);
        if (dir[0]=='newfile.js') {
            await fs.unlink('./folder/' + dir[0]);
            console.log('파일삭제 성공');
            await fs.rmdir('./folder');
            console.log('폴더삭제 성공');
        }
    } catch (err) {
        console.error('폴더 혹은 파일이 존재하지 않습니다',err);
    }
}

deleteFolder()