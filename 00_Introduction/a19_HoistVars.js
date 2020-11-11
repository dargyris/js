console.log( age ); // Undefined
var age = 23;
console.log( age ); // Works!

function foo (){ // Demoing scope
    console.log( age ); // Also undefined!
    var age = 65;
    console.log( age );
}

foo();
console.log( age );
