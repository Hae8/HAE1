const formData = new FormData();

formData.append('name', '해파리');
formData.append('item', '해물파전');
formData.append('item', '해물찜');

console.log(formData);
// FormData {
//     [Symbol(state)]: [
//       { name: 'name', value: '해파리' },
//       { name: 'item', value: '해물파전' },
//       { name: 'item', value: '해물찜' }
//     ]
//   }
console.log(formData.has('item')); // true
console.log(formData.get('item')); // 해물파전
console.log(formData.getAll('item')); // [ '해물파전', '해물찜' ]

formData.append('hobby', ['웹 개발', '코바늘']);
console.log(formData.get('hobby')); // 웹 개발,코바늘

formData.delete('name')
formData.set('item', '맥북');
console.log(formData);
// FormData {
//     [Symbol(state)]: [
//       { name: 'item', value: '맥북' },
//       { name: 'hobby', value: '웹 개발,코바늘' }
//     ]
//   }