const os = require('os');

console.log('운영체제 정보-----------------------');
console.log('프로세서 아키텍처: ', os.arch());
console.log('운영체제 플랫폼: ', os.platform());
console.log('운영체제 종류: ', os.type());
console.log('운영체제 부팅시간(초): ', os.uptime());
console.log('컴퓨터 이름: ', os.hostname());
console.log('운영체제 버전: ', os.release());

console.log('경로------------------------------');
console.log('홈 디렉터리 경로: ', os.homedir());
console.log('임시 파일 저장 경로: ', os.tmpdir());

console.log('cpu 정보--------------------------');
console.log('컴퓨터 코어 정보: ', os.cpus());
console.log('컴퓨터 코어 개수: ', os.cpus().length);

console.log('메모리 정보-------------------------');
console.log('사용 가능한 메모리 용량: ', os.freemem());
console.log('전체 메모리 용량: ', os.totalmem());