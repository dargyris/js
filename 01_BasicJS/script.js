const prompt = require( "prompt-sync" )( {sigint: true} );

let thePerson = {
    itsKey: [], 
    itsName: [], 
    itsMix: {
        itsPoliteness: [], 
        itsGrumpiness: [], 
        itsRudeness: [],
        itsHappiness: [],
        itsWittiness: [], 
        itsSarcasm: []
    }
};

thePerson.itsKey[0] = 0;
thePerson.itsName[0] = "Marco";
thePerson.itsMix.itsPoliteness[0.1];
thePerson.itsMix.itsGrumpiness[0.1];
thePerson.itsMix.itsRudeness[0.3];
thePerson.itsMix.itsHappiness[0.1];
thePerson.itsMix.itsWittiness[0.3];
thePerson.itsMix.itsSarcasm[0.1];

console.log( thePerson );

/*
let theAnswer = {
    itsKey: [], 
    itsTitle: [], 
    itsWeight: [], 
    itsAnswer: []
}

theAnswer.itsKey[0] = 0;
theAnswer.itsTitle[0] = ["Hello"];
theAnswer.itsWeight[0] = [0.];
theAnswer.itsAnswer[0] = ["Hello!"];

let input = prompt( "> " );
*/
