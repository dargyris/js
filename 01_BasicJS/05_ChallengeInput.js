printWelcome();

const prompt = require( "prompt-sync" )( { sigint: true } );

let person = {
    key: [], 
    name: [], 
    mass: [], 
    height: [],
    bmi: [], 

    calcBmi: function (){
        for ( let i=0; i<this.key.length; i++ ){
            this.bmi[i] = this.mass[i] / ( this.height[i] ** 2 );
            this.bmi[i] = this.bmi[i].toFixed(2);
        }
    }
};

let people = getPeople();
getData( people );

person.calcBmi();

console.log( person );

function printWelcome (  ){
    console.log( "=========================================" );
    console.log( "*    Welcome to BMI Calculator v0.0!    *" );
    console.log( "=========================================" );
    console.log();
}

function getPeople (){
    console.log( "How many people would you like to process?" );
    console.log();
    let people = prompt ( "> " );
    console.log();
    return people;
}

function getData ( people ){
    for ( let i=0; i<people; i++ ){
        person.key[i] = i;
        person.name[i] = prompt( "Name: " );
        person.mass[i] = prompt( "Mass: " );
        person.height[i] = prompt( "Height: " );
        console.log();
    }
}

