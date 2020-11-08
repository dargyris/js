function calculateAge ( birthYear ){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log( ageJohn );
console.log( ageMike );
console.log( ageJane );

function yearsUntilRetirement ( year, firstName ){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if ( retirement>0 ){
        console.log( firstName + " retires in " + retirement + " years." );
    } else {
        console.log( firstName + " is already retired!" );
    }
}

yearsUntilRetirement( 1990, "John");
yearsUntilRetirement( 1948, "Mike");
yearsUntilRetirement( 1969, "Jane");
