"use strict";
const prompt = require( "prompt-sync" )( {sigint: true} );

let theTeam = {
    itsName: ["Dolphs", "Koals "], 
    itsScores: [
        [ [44, 23, 71], [85, 54, 41] ], 
        [ [65, 54, 49], [23, 34, 27] ] 
    ], 
    itsAvgScore: [
        [ [0], [0] ],
        [ [0], [0] ]
    ],
    itsWinTrigger: [
        [ [" "], [" "] ], 
        [ [" "], [" "] ]
    ],

    itsAvgCalculator: function () {
        for ( let i=0; i<this.itsScores.length; i++ ){
            for ( let j=0; j<this.itsScores[i].length; j++ ){
                let temp = 0;
                for ( let k=0; k<this.itsScores[i][j].length; k++ ){
                    temp += this.itsScores[i][j][k];
                }
                this.itsAvgScore[i][j] = temp / this.itsScores[i][j].length;
                this.itsAvgScore[i][j] = this.itsAvgScore[i][j].toFixed(2);
                this.itsAvgScore[i][j] = Number( this.itsAvgScore[i][j] );
            }
        }
    },

    itsWinnerCalculator: function (){
        for ( let i=0; i<this.itsAvgScore.length-1; i++ ){
            for ( let j=0; j<this.itsAvgScore[i].length; j++ ){
                if( this.itsAvgScore[i][j] >= 2*this.itsAvgScore[i+1][j] )
                    this.itsWinTrigger[i][j] = "W";
            }
        }
    }
};

theTeam.itsAvgCalculator();
theTeam.itsWinnerCalculator();

process.stdout.write( `\t` );
for ( let i=0; i<theTeam.itsName.length; i++ ){
    process.stdout.write( `  Set${i}\t  Avg${i}  ` );
}
console.log();

for ( let i=0; i<theTeam.itsAvgScore.length; i++ ){
    process.stdout.write( `${theTeam.itsName[i]}: ` );
    for ( let j=0; j<theTeam.itsAvgScore[i].length; j++ ){
        process.stdout.write( `${theTeam.itsScores[i][j]}   `
        +`${theTeam.itsAvgScore[i][j]}${theTeam.itsWinTrigger[i][j]}  ` );
    }
    process.stdout.write( `\n` );
}
