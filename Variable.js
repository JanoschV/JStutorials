const age = 30;
const name = 'johnny';

if(true)
{
    const age = 40;
    const name = 'peter';
    console.log('inside 1st code block',age,name);

    if (true)
    {
        const age = 50;
        console.log('inside second code block',age);
        let test = 'hello';
    }
}

console.log('outside code block',age,name,test);