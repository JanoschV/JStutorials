const title = 'how to lose friends and alienate people ';
const author = 'Some Muppet';
const likes = 45;

//let result = ' The blog called ' + title + 'by ' + author +' has '+ likes +' likes';

//console.log(result);

let result = `The blog called ${title}by ${author} has ${likes} likes`;

console.log(result);

let html =`
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes </span>
` ;
console.log(html);