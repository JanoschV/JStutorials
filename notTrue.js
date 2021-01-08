let user = false;

if(!user)
{
 
    console.log('the user is true');

}

const nums = [5,10,15,20,25,30,40,50];

for (let i = 0; i < nums.length; i++) {

    console.log('your score: ',nums[i])

    if(nums[i]===30)
    {
        break;
    }
}    

const grade = '50';

switch(grade)
{
    case 'A':
        console.log('you are a winner');
        break;
        case 'B':
        console.log('you are a less of a winner');
        break;
        case 'C':
        console.log('you are fine');
        break;
        case 'D':
        console.log('you are a loser');
        break;
        case 'E':
        console.log('you suck');
        break;
        default:
            console.log('shutup nerd');
}
