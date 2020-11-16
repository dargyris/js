let theTips = {
    itsBill: [275, 40, 430, -50],
    printTips: function (){
        for ( let i=0; i<this.itsBill.length; i++ ){
            console.log( `Steven payed `
            +`${
                this.itsBill[i]>=50 && this.itsBill[i]<=300 
                    ? this.itsBill[i]*1.15 
                    : this.itsBill[i]>=0
                    ? this.itsBill[i]*1.20
                    : null
            }` );
        }
    }

};

theTips.printTips();
