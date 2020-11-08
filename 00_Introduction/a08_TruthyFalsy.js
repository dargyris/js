// Falsy values: undefined, null, 0, empty strings, '', NaN: Not a number.
// Truthy values: NOT Falsy.

var height;
height = 0;

if ( height || height === 0 ){
    console.log( "Variable is defined." );
} else {
    console.log( "Variable has NOT been defined." );
}
