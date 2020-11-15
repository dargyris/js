var firstName = "John";
var civilStatus = "Single";

if ( civilStatus === "Married" ){
    console.log( firstName + " is married!");
} else {
    console.log( firstName + " is NOT married!");
}

var isMarried = true;

if ( isMarried ){
    console.log( firstName + " is married!");
} else {
    console.log( firstName + " is NOT married!");
}

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log( "BMIMark\t:" + BMIMark );
console.log( "BMIJohn\t:" + BMIJohn + "\n" );

if ( BMIMark > BMIJohn ){
    console.log( "Mark's BMI is higher than John's." );
} else {
    console.log( "John's BMI is higher than Mark's." );
}

var markHigherBMI = BMIMark > BMIJohn;
console.log( "Is Mark's BMI higher than John's?\t" + markHigherBMI );
