let user = 
{
    name: 'Johnny',
    age: 35,
    email: 'Johnny@gmail.com',
    location: 'Stanford',
    jobs: ['fitter and turner', 'Carpenter']
};

console.log(user);
console.log(user.jobs);

user.age = 40;

console.log(user['email']);

console.log(user['location']);
user['location']='Redfern';
console.log(user.location);