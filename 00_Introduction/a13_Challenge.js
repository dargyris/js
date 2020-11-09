var bills = [124, 48, 268];
var tips = [0, 0, 0];
var sum = [0, 0, 0];

function tipCalculator ( theBills ){
    for ( var i=0; i<theBills.length; i++ ){

        switch ( true ){
            case theBills[i]>=0 && theBills[i]<50:
                tips[i] = theBills[i] * 0.20;
                break;
            case theBills[i]>=50 && theBills[i]<200:
                tips[i] = theBills[i] * 0.15;
                break;
            case theBills[i]>=200:
                tips[i] = theBills[i] * 0.10;
                break;
            default:
                console.log( "\n\t*** Panic! Bad input... ***\n" );
                break;
        }
        sum[i] = theBills[i] + tips[i];

        bills[i] = ( bills[i] ).toFixed(2);
        tips[i] = ( tips[i] ).toFixed(2);
        sum[i] = ( sum[i] ).toFixed(2);


    }
}

console.log( "===================================================" );
console.log( "------------ Bill ------ Tip --- Sum --------------\n" );

tipCalculator(bills);

for ( var i=0; i<bills.length; i++ ){
    console.log( "Rest. " + (i+1) + ":    " + bills[i] + "\t" + tips[i] + "\t" + sum[i] );
}

console.log( "\n" );
