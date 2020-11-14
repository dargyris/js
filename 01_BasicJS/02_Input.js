const prompt = require( "prompt-sync" )( { sigint: true } );

let firstName = prompt( "First name? " );
let lastName = prompt( "Last name? " );
let age = prompt( "Age? " );
let height = prompt( "Height? " );
let weight = prompt( "Weight? " );

console.log();
console.log( "First name: " + firstName );
console.log( "Last name: " + lastName );
console.log( "Age: " + age );
console.log( "Height: " + height );
console.log( "Weight: " + weight );
