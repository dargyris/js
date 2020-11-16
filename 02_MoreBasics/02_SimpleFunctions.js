"use strict";

function logger (){
    console.log( "My name is Dias." );
}

// Calling, Running, Invoking
logger(23, "Hadrian", 108);
// In js, apparently, using arguments with functions
// that accept none is fine! :s
logger();
logger();
console.log();

function fruitProcessor ( apples, oranges ){
    console.log( apples, oranges );
    const juice = `Juice from ${apples} apples `
    +`and ${oranges} oranges.`;
    return juice;
}

let myString = fruitProcessor(2, 3);
console.log( myString );
