console.log(Math);
console.log(Math.Pi);
console.log(Math.E);

const area = 15.3;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

console.log(random);

const userOne = {name: 'john', age: 29};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.name = 'Jack';
console.log(userOne,userTwo);