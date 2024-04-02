const {data} = require('./var')

console.log('require.cache', require.cache);

console.log('require.main', require.main);
console.log(require.main == module); // true

console.log(require.main.filename); // C:\Users\user\multi_it\06_node\240402\01_module\index.js