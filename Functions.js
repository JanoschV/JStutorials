// function greet()
// {
//     console.log('hello there');
// }


// const speak = function(name= 'pippo',time = 'morning')
// {
// console.log(`good ${time} to you ${name}`);
// };



// greet();
// speak('Kenneth','evening');
// speak();

// const calcArea = function(radius)
// {
//     let area = 3.14 * radius**2;
//     return area;
// };


// const calcArea = radius=>
// {
//     return 3.14 * radius**2;
// };

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(10);

// console.log(area);

const bill = function(products, tax)
{
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total +=products[i] + products[i] * tax;        
    }
    return total;
}

console.log(bill([20,35,40],0.2));