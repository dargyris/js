"use strict";

const prompt = require( "prompt-sync" )( {sigint: true} );

let thePerson = {
    itsBirthYear: 0,
    itsFirstName: ""
};

console.log( "Please enter your personal information:" );
console.log();
thePerson.itsFirstName = prompt( "First name > " );
thePerson.itsBirthYear = prompt( "Birth year > " );
console.log();

const yearsUntilRetirement = ( firstName, birthYear ) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return retirement>0
    ?`${firstName} retires in ${retirement} years`
    :`${firstName} has already retired.`;
}

console.log( yearsUntilRetirement( thePerson.itsFirstName, thePerson.itsBirthYear ) );
