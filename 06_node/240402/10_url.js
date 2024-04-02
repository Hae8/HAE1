const url = require('url') // 생략 가능

const { URL } = url;
const myURL = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%85%B8%EB%93%9C')

console.log('url 객체 : ', myURL);
console.log('url search 부분 : ', myURL.search);
console.log('url search params 객체 : ', myURL.searchParams);
console.log('url 조립 : ', url.format(myURL));

console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('query')); // 키에 해당하는 모든 값
console.log('searchParams.get():', myURL.searchParams.get('query')); // 키에 해당하는 첫 번째 값
console.log('searchParams.has():', myURL.searchParams.has('query')); // 해당 키 존재 여부

console.log('searchParams.keys():', myURL.searchParams.keys()); // 모든 키를 iterator 객체로 가져옴 - 반복문 돌리기 좋은 형태
console.log('searchParams.values():', myURL.searchParams.values()); // 모든 값을 iterator 객체로 가져옴 - 반복문 돌리기 좋은 형태

myURL.searchParams.append('query', 'node'); // 해당 키를 추가
console.log('searchParams.getAll():', myURL.searchParams.getAll('query'));

// myURL.searchParams.set('query', '노드노드'); // 해당 키를 추가
// console.log('searchParams.getAll():', myURL.searchParams.getAll('query'));

// myURL.searchParams.delete('query'); // 해당 키를 추가
// console.log('searchParams.getAll():', myURL.searchParams.getAll('query'));

console.log(myURL.searchParams.toString()); // URL 주소를 보전하면서 수정을 할 수 있다.