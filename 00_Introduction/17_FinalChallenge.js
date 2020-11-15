var theBill = {
    jBills: [124, 48, 268, 180, 42],
    jTips: [],
    jSum: [],

    mBills: [77, 475, 110, 45],
    mTips: [],
    mSum: [],

    calcJohn: function (){
        for ( var i=0; i<this.jBills.length; i++ ){

            switch ( true ){
                case this.jBills[i]>=0 && this.jBills[i]<50:
                    this.jTips[i] = this.jBills[i] * 0.20;
                    break;
                case this.jBills[i]>=50 && this.jBills[i]<200:
                    this.jTips[i] = this.jBills[i] * 0.15;
                    break;
                case this.jBills[i]>=200:
                    this.jTips[i] = this.jBills[i] * 0.10;
                    break;
                default:
                    console.log( "\n\t*** Panic! Bad input... ***\n" );
                    break;
            }

            this.jSum[i] = this.jBills[i] + this.jTips[i];
            this.jBills[i] = ( this.jBills[i] ).toFixed(2);
            this.jTips[i] = ( this.jTips[i] ).toFixed(2);
            this.jSum[i] = ( this.jSum[i] ).toFixed(2);

        }
    },

    calcMark: function (){
        for ( var i=0; i<this.mBills.length; i++ ){

            switch ( true ){
                case this.mBills[i]>=0 && this.mBills[i]<100:
                    this.mTips[i] = this.mBills[i] * 0.20;
                    break;
                case this.mBills[i]>=100 && this.mBills[i]<300:
                    this.mTips[i] = this.mBills[i] * 0.10;
                    break;
                case this.mBills[i]>=300:
                    this.mTips[i] = this.mBills[i] * 0.25;
                    break;
                default:
                    console.log( "\n\t*** Panic! Bad input... ***\n" );
                    break;
            }

            this.mSum[i] = this.mBills[i] + this.mTips[i];
            this.mBills[i] = ( this.mBills[i] ).toFixed(2);
            this.mTips[i] = ( this.mTips[i] ).toFixed(2);
            this.mSum[i] = ( this.mSum[i] ).toFixed(2);

        }
    }

};

function calcAvgTips ( tips ){
    var sum=0;
    for ( var i=0; i<tips.length; i++ ){
        sum += parseFloat(tips[i]);
    }
    console.log( "\nAverage tips........... " + (sum/tips.length).toFixed(2) );
    console.log();
}

theBill.calcJohn();
theBill.calcMark();

console.log( "\t\t~ John's way... ~" );
console.log( "===================================================" );
console.log( "------------ Bill ------ Tip --- Sum --------------\n" );
for ( var i=0; i<theBill.jBills.length; i++ ){
    console.log( "Rest. " + (i+1) + ":    " + theBill.jBills[i] + "\t" + theBill.jTips[i] + "\t" + theBill.jSum[i] );
}
calcAvgTips(theBill.jTips);

console.log( "\t\t~ Mark's way... ~" );
console.log( "===================================================" );
console.log( "------------ Bill ------ Tip --- Sum --------------\n" );
for ( var i=0; i<theBill.mBills.length; i++ ){
    console.log( "Rest. " + (i+1) + ":    " + theBill.mBills[i] + "\t" + theBill.mTips[i] + "\t" + theBill.mSum[i] );
}
calcAvgTips(theBill.mTips);
