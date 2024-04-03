const fs = require('fs').promises;

async function createCopyFile(){
    try{
        await fs.copyFile('readme.txt','copy.txt')
        console.log('복사완료');
    } catch (error) {
        console.error(error);
    };
}

createCopyFile();