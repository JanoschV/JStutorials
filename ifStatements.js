const age = 23;

if(age >20){
    console.log('you are over 20')

}

const names = ['snap','crackle','pop','crunch'];


if (names.length>3){

    console.log("that's a lot of flavour");
}

const password = 'p@sswor';
if(password.length>12&&password.includes('@'))
{

    console.log('that is well long');
}
else if(password.length>=8||password.includes('@'))
{
    console.log('password is sufficient');
}

else
{
    console.log('password too short');
}

