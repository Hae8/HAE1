const dep2 = require('./dep2');

console.log('2번이 필요해', dep2);

module.exports = () => {
    console.log('나는 1번 : dep2', dep2);
}