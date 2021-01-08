// const name = 'Jimmybob';

// const greet = () => 'hello';

// let resultOne = greet();

// console.log(resultOne);


// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// const myFunc = (callbackfunc) =>
// {
//     let value = 50;
//     callbackfunc(value);

// };

// myFunc(value) =>
// {
//     console.log(value);

// });

let people = ['john','tony','sasha','peter','clare'];

const logPerson = (person,index) =>
{

    console.log(`${index}`)

}

people.forEach((person)=>{
console.log(person);
});