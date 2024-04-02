const crypto = require('crypto');

const pass = '비밀번호';

console.log('base64:', crypto.createHash('sha512').update(pass).digest('base64'));
console.log('hex:', crypto.createHash('sha512').update(pass).digest('hex'));