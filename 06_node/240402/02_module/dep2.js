const dep1 = require('./dep1');

console.log('1번이 필요해', dep1);

module.exports = () => {
    console.log('나는 2번 : dep1', dep1);
}