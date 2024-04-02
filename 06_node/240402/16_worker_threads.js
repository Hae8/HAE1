const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (msg) => console.log('부모가 받은 데이터 :', msg));
    worker.on('exit', (code) => console.log('exit', code));
    worker.postMessage('부모가 워커에 전송한 데이터');
} else {
    parentPort.on('message', (msg) => {
        console.log('워커가 받은 데이터 :' ,msg);
        parentPort.postMessage('워커가 부모에게 전송한 데이터');
        parentPort.close();
    });
}