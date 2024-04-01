const userA = {};
console.log(userA.name); // undefined

const userB = undefined;
// console.log(userB.name); // TypeError: Cannot read properties of undefined (reading 'name')
console.log(userB?.name); // undefined

const usersArr = null;
console.log(usersArr?.[0]); // undefined