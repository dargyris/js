"use strict";

// Variable declaration
const firstName = "Diamantis";
let lastName = `Argyris`;

// Function declaration
// Hoisting allows for use of declared function BEFORE
// it is declared as oppposed to Function Expressions.
function printValues( valA, valB ) {
    console.log( valA, valB );
}

printValues( firstName, lastName );
console.log();

// Function Expression without return
const myExpression = function ( valA, valB ){
    console.log( valA, valB );
}

myExpression( firstName, lastName ); // Prints

console.log( myExpression ); // Without arguments
console.log( myExpression( firstName, lastName ) );
// Returns undefined after all...
// Probably because its expression result gets assigned to
// a variable. 
console.log();

// Function Expression with return
const myExpressReturn = function ( valA, valB ){
    return `${valA} ${valB}`;
}

myExpressReturn( firstName, lastName ); // Does not print!

console.log( myExpressReturn ); // Without arguments
console.log( myExpressReturn( firstName, lastName ) );

const myString = myExpressReturn( lastName, firstName );
console.log( myString );
console.log();
