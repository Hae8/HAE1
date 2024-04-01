const { odd, even } = require('./var');

exports.checkOddOrEven = (num) => {
    if (num % 2) {
        return odd
    } else {
        return even;
    }
}

// module.exports = checkOddOrEven;

