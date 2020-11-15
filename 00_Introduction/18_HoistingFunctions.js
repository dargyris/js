//calculateAge(1965); // Works

// Function declaration
function calculateAge ( year ){
    console.log( 2016 - year );
}
//calculateAge(1965); // Works

retirement(1990); // Does not work
// Function expression
var retirement = function ( year ){
    console.log( 65-(2016-year) );
}
//retirement(1990); // Works

