const fs = require('fs').promises;

fs.readFile('readme.txt', 'utf8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })