// chaining array methods

const products = [

    {name: "mi home", price: 200},
    {name: "mi note", price: 150},
    {name: "scott matrix", price: 300},
    {name: "hp", price: 300},
    {name: "mi fit", price: 30},

];

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);