const prompt = require( "prompt-sync" )( {sigint: true} );

let theBot = {
    itsKey: [], 
    itsName: [], 
    itsMix: {
        itsHappiness: [],
        itsWittiness: [], 
        itsPoliteness: [], 
        itsGrumpiness: [], 
        itsSarcasm: [],
        itsSadness: [], 
        itsRudeness: []
    }
};

theBot.itsKey[0] = 0;
theBot.itsName[0] = "Marco";
theBot.itsMix.itsHappiness[0.1];
theBot.itsMix.itsWittiness[0.3];
theBot.itsMix.itsPoliteness[0.1];
theBot.itsMix.itsGrumpiness[0.1];
theBot.itsMix.itsSarcasm[0.1];
theBot.itsMix.itsSadness[0.0];
theBot.itsMix.itsRudeness[0.3];

let theDict = {
    itsKey: [], 
    itsType: [], 
    itsWord: [], 
    itsMix: {
        itsHappiness: [],
        itsWittiness: [], 
        itsPoliteness: [], 
        itsGrumpiness: [], 
        itsSarcasm: [],
        itsSadness: [], 
        itsRudeness: []
    }
};

theDict.itsKey[0] = 0;
theDict.itsWord[0] = "Hello";
theDict.itsType[0] = "Greeting";
theDict.itsMix.itsHappiness[0.2];
theDict.itsMix.itsWittiness[0.2];
theDict.itsMix.itsPoliteness[0.2];
theDict.itsMix.itsGrumpiness[0.1];
theDict.itsMix.itsSarcasm[0.2];
theDict.itsMix.itsSadness[0.0];
theDict.itsMix.itsRudeness[0.1];

let thePerson = {
    itsKey: [], 
    itsName: [], 
    itsAge: [], 
    itsWeight: [], 
    itsMix: {
        itsHappiness: [],
        itsWittiness: [], 
        itsPoliteness: [], 
        itsGrumpiness: [], 
        itsSarcasm: [],
        itsSadness: [], 
        itsRudeness: []
    }
};


let inWords = [];
let inMessage = prompt ( "@Marco > " );
let inWordCount = inWords.length;

