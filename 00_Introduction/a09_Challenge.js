var teamJohn = [89, 120, 103];
//var teamMike = [116, 94, 123];
var teamMike = [89, 120, 103];
var teamMary = [97, 134, 105];

var avgJohn = 0;
var avgMike = 0;
var avgMary = 0;

for ( var i=0; i<teamJohn.length; i++ ){
    avgJohn += teamJohn[i];
}
avgJohn /= teamJohn.length;

for ( var i=0; i<teamMike.length; i++ ){
    avgMike += teamMike[i];
}
avgMike /= teamMike.length;

for ( var i=0; i<teamMary.length; i++ ){
    avgMary += teamMary[i];
}
avgMary /= teamMary.length;

var peopleScores = [["John", avgJohn], ["Mike", avgMike], ["Mary", avgMary]];

for ( var i=0; i<peopleScores.length; i++ ){
    console.log( "Team " + peopleScores[i][0] + " avg:\t" + peopleScores[i][1] );
}


for ( var i=0; i<peopleScores.length; i++ ){
    for ( var j=i+1; j<peopleScores.length; j++ ){

        if ( peopleScores[i][1] < peopleScores[j][1] ){
            var temp = peopleScores[i];
            peopleScores[i] = peopleScores[j];
            peopleScores[j] = temp;
        }
    }
}
console.log( "\n" );

for ( var i=0; i<peopleScores.length; i++ ){
    if ( i<peopleScores.length-1 && peopleScores[i][1]>peopleScores[i+1][1] ){
        if ( i===0 ){
            console.log( "Team " + peopleScores[i][0] + " avg:\t" + peopleScores[i][1] + " ....... " + "Winner!" );
        } else {
            console.log( "Team " + peopleScores[i][0] + " avg:\t" + peopleScores[i][1] + " ....... " + "Top Scorer." );
        }
    } else if ( i<peopleScores.length-1 ){
        console.log( "Team " + peopleScores[i][0] + " avg:\t" + peopleScores[i][1] + " ....... " + "Tie." );
    } else if ( i===peopleScores.length-1 && peopleScores[i][1]===peopleScores[i-1][1] ){
        console.log( "Team " + peopleScores[i][0] + " avg:\t" + peopleScores[i][1] + " ....... " + "Tie." );
    } else {
        console.log( "Team " + peopleScores[i][0] + " avg:\t" + peopleScores[i][1] + " ....... " + "Top Scorer." );
    }

}

