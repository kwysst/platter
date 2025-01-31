let json = ``;
let output = '[';
JSON.parse(json).forEach(dish => {
output += `{
"name":"${dish.name}",
"kbju":[${dish.kbju.toString()}],
"time":"${dish.time}",
"products":[
`;
output += dish.products.map(e => '\t"'+e+'"').join(',\n');
output += `],
"recipe": [
`;
output += dish.recipe.join('.').replace(/[.]{2}/g, '.').replace(/[.]{1}$/g, '').split(/[.]{1}\s*/).map(e => '\t"'+e+'"').join(',\n');
output += `]
},
`
})
output += ']'
console.log(output);
