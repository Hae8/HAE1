const { odd, even } = require('./var');

exports.oddChecker = (number) => {
    if (number % 2) {
        return odd;
    }
    return even;
}