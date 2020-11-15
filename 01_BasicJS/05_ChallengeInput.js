printWelcome();

const prompt = require( "prompt-sync" )( { sigint: true } );

let thePerson = {
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

thePerson.calcBmi();
thePerson = sortBmi( thePerson );

console.log( thePerson );

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
        thePerson.key[i] = i;
        thePerson.name[i] = prompt( "Name: " );
        thePerson.mass[i] = prompt( "Mass: " );
        thePerson.height[i] = prompt( "Height: " );
        console.log();
    }
}

function sortBmi ( theP ){
    for ( let i=0; i<theP.bmi.length; i++ ){
        for ( let j=i+1; j<theP.bmi.length; j++ ){
            if ( theP.bmi[j]>theP.bmi[i] ){
                let temp = theP.name[i];
                theP.name[i] = theP.name[j];
                theP.name[j] = temp;
                temp = theP.mass[i];
                theP.mass[i] = theP.mass[j];
                theP.mass[j] = temp;
                temp = theP.height[i];
                theP.height[i] = theP.height[j];
                theP.height[j] = temp;
                temp = theP.bmi[i];
                theP.bmi[i] = theP.bmi[j];
                theP.bmi[j] = temp;
            }
        }
    }
    return theP;
}
