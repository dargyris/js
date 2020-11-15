let person = {
    key: [0, 1], 
    name: ["Mark", "John"], 
    mass: [78, 92], 
    height: [1.69, 1.95],
    bmi: [], 

    calcBmi: function (){
        for ( let i=0; i<this.key.length; i++ ){
            this.bmi[i] = this.mass[i] / ( this.height[i] ** 2 );
            this.bmi[i] = this.bmi[i].toFixed(2);
        }
    }
};

person.calcBmi();
console.log( person );
