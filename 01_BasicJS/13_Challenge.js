const prompt = require( "prompt-sync" )( {sigint: true} );

let theTeam = {
    itsName: ["Dolph", "Koal."],
    itsScore: [
    [ [96, 108, 89], [97, 112, 101], [97, 112, 101] ],
    [ [88, 91, 110], [109, 95, 123], [109, 95, 106] ]
    ],
    itsAvg: [[], []],
    calcAvg: function (){
        for ( let i=0; i<this.itsScore.length; i++ ){
            for ( let j=0; j<this.itsScore[0].length; j++ ){
                let temp = 0;
                for ( let k=0; k<this.itsScore[0][0].length; k++ ){
                    temp += this.itsScore[i][j][k];
                }
                this.itsAvg[i][j] = temp / this.itsScore[i][j].length;
                this.itsAvg[i][j] = this.itsAvg[i][j].toFixed(2);
            }
        }
    }
};

theTeam.calcAvg();

for ( let i=0; i<theTeam.itsAvg[0].length; i++ ){
    console.log( `Round ${i+1}` );
    for ( let j=0; j<theTeam.itsName.length; j++ ){
        console.log( `${theTeam.itsName[j]}\tavg Score: `
+ `${theTeam.itsAvg[j][i]} ` );
    }
    console.log();
}
