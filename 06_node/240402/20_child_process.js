const exec = require('child_process').exec;
const process = exec('ls') // mkdir test, calc.exe 와 같은 cmd 명령도 사용할 수 있다.

process.stdout.on('data', (data) => {
    console.log(data.toString());
})

process.stderr.on('data', (data) => {
    console.error(data.toString())
})