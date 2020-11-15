const stringYear = "1990";
const numberYear = 1990;
let boolFromString = Boolean( stringYear );
let boolFromNumber = Boolean( numberYear );

console.log( "String year: " + stringYear );
console.log( "Number year: " + numberYear );
console.log( "Boolean from string: " + boolFromString );
console.log( "Boolean from number: " + boolFromNumber );
console.log();

console.log( `${stringYear} ${numberYear} ${boolFromNumber} `
+ `${boolFromString} 20` );
