"use strict";

const firstName = `Diamantis`;
const lastName = `Argyris`;

const myName = function ( varA, varB ){
    return `${varA} ${varB}`;
}

console.log( myName( firstName, lastName ) );
console.log();

// Arrow functions: Just for ONE parameter!
const calcAge = birthYear => 2020 - birthYear;
console.log( calcAge( 1988 ) );
console.log();

// Example 2
const fName = myFirstName => myFirstName;
console.log( fName( firstName ) );
console.log();

// Example 3
const myCalc = myParam => myParam**2;
console.log( myCalc( 100 ) );
console.log();

// Example 4
const myCalculation = myParameter => {
    let temp = 65;
    let otherTemp = temp - myParameter;
    return otherTemp;
}
console.log( myCalculation( 32 ) );
console.log();

// General outline
// const variable = parameter => {return;}

// Example 5
const myFullName = ( myParamA, myParamB ) => `${myParamA} ${myParamB}`;
console.log( myFullName( firstName, lastName ) );
