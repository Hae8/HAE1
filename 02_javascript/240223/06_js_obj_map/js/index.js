/*
맵: Map
키-값 한 쌍으ㅡ로 이뤄져 있고, 순서가 있다.
어떤 데이터 타입도 key가 될 수 있다.
*/

/*
const my_map = new Map();
my_map.set('name', '홍길동');
my_map.set('age', 20);
*/

/* 위의 코드를 이처럼 쓸 수 있다. */
const my_map = new Map([ // 객체지만 순서가 있기 때문에 배열로 만들어 주기 위하여 {}대신 []을 쓴다.
    ['name', '홍길동'],
    ['age', 20],
]);

/* 맵 체이닝 - 맵의 메서드는 맵을 반환한다. */
my_map
    .set('hobby', 'book')
    .set('family', ['mom', 'dad']);

/* 맵이 가진 프로퍼티, 메서드 */
console.log(my_map.size); //4 //크기 
console.log(my_map.get('family')); // ['mom', 'dad']

console.log(my_map.has('family')); // true
console.log(my_map.has('grade')); // false

/* MapIterator */
console.log(my_map.keys()); // MapIterator {'name', 'age', 'hobby', 'family'}
console.log(my_map.values()); // MapIterator {'홍길동', 20, 'book', Array(2)}
console.log(my_map.entries()); // MapIterator {'name' => '홍길동', 'age' => 20, 'hobby' => 'book', 'family' => Array(2)}

console.log(my_map.delete('family')); // true
console.log(my_map.delete('grade')); // false

console.log(my_map); // Map(3) {'name' => '홍길동', 'age' => 20, 'hobby' => 'book'}
console.log(my_map.clear()); //undefined
console.log(my_map); // Map(0) {size: 0}