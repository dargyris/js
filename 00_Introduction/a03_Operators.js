// Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log( isFullAge );

var ageJohn = now - yearJohn;
var ageMark = 35;

var average = ( ageJohn + ageMark ) / 2;
console.log( 'average: ' + average );

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log( "x: " + x );
console.log( "y: " + y );

// More operators
x *= 2;
console.log( "x: " + x );
