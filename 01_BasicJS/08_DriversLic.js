const prompt = require( "prompt-sync" )( {sigint: true} );
const age = prompt( "> " ); 

const isOldEnough = age >= 18;
isOldEnough ? console.log( `She could drive` ): 
    + console.log( `No!` );


console.log( "\nI wonder if using the + character "
+ "is going to make my life harder and the "
+ "code more complicated, or the opposite...");

let varA = 100;
let varB = 900;
let varC = 1000;
let someVar = varA + varB + varC;
let someOtherVar = varA + 
    + varB +
    + varC;

console.log( "someVar: " + someVar );
console.log( "someOtherVar: " + someOtherVar );
