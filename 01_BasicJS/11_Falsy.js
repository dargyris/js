console.log( "Falsy 1: " + 0 + Boolean( 0 ) );
console.log( "Falsy 2: " + "" + Boolean( "" ) );
console.log( "Falsy 3: " + undefined + Boolean( undefined ) );
console.log( "Falsy 4: " + null + Boolean( null ) );
console.log( "Falsy 5: " + NaN + Boolean( NaN ) );
console.log();

console.log( `Falsy 1: ${0}\t\t${Boolean (0)} `);
console.log( `Falsy 2: ${""}\t\t${Boolean ("")} `); 
console.log( `Falsy 3: ${undefined}\t${Boolean (undefined)} `);
console.log( `Falsy 4: ${null}\t\t${Boolean (null)} `);
console.log( `Falsy 5: ${NaN}\t\t${Boolean (NaN)} `);
console.log();

let myName = "Diamantis";
console.log( `I can't put anything I want in a ` 
+ `template expression... ${myName} `
+ `${Number(myName)}` );
console.log();

console.log( `At least it seems that with backticks ` 
    + `I can manipulate how my code looks...` );
