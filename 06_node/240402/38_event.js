const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('첫 번째 이벤트');
});
myEvent.emit('event1');

myEvent.on('event2', () => {
    console.log('두 번째 이벤트');
});
myEvent.on('event2', () => {
    console.log('또 다른 두 번째 이벤트'); // 중첩되어 적용된다.
});
myEvent.emit('event2')

console.log(myEvent.listenerCount('event1'));
console.log(myEvent.listenerCount('event2'));

myEvent.once('event3', () => console.log('세 번째 이벤트')); // 한번만 실행되는 이벤트
myEvent.emit('event3')
myEvent.emit('event3') // 실행 안 됨

myEvent.removeAllListeners('event2') // 이벤트리스너를 전부 지운다.
console.log(myEvent.listenerCount('event2'));

const listener = () => console.log('리스너 함수 실행');
myEvent.on('event5', listener);
myEvent.on('event5', () => console.log('다섯 번째 이벤트'));
myEvent.off('event5', listener) // 삭제하고 싶은 이벤트를 지정해야 한다.
myEvent.emit('event5');
