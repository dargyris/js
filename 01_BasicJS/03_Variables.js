//let firstName, lastName, age, height, weight;

const prompt = require( "prompt-sync" )( { sigint: true } );

let firstName = prompt( "First name? " );
let lastName = prompt( "Last name? " );
let age = prompt( "Age? " );
let height = prompt( "Height? " );
let weight = prompt( "Weight? " );

console.log();
console.log( "Type of firstName: " + typeof firstName );
console.log( "Type of lastName: " + typeof lastName );
console.log( "Type of age: " + typeof age );
console.log( "Type of height: " + typeof height );
console.log( "Type of weight: " + typeof weight );
