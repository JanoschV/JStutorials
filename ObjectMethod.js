const blogs = [
    {title: '10 things I hate about me', likes: 20},
    {title: 'why bigfoot isnt real', likes: 15}
];

let user = 
{
    name: 'Johnny',
    age: 35,
    email: 'Johnny@gmail.com',
    location: 'Stanford',
    jobs: [ {title: '10 things I hate about me', likes: 20},
    {title: 'why bigfoot isnt real', likes: 15}],
    
    login: function()
    {
        console.log('I have loggd in');
    },
    logout: function()
    {
        console.log('logged out now');

    },
    logblog: function()
    {
       // console.log(this.jobs);
        console.log('the jobs of this use are: ')
        this.jobs.forEach(jobs=>
            {
                console.log(jobs.title,jobs.likes)
            });
    }
};

user.login();
user.logout();
user.logblog();
