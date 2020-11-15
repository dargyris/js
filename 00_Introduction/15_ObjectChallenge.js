var person = new Object();
person.name = ["Mark", "John", "Mary"];
person.mass = [60, 90, 120];
person.height = [1.90, 1.60, 1.30];
person.bmi = [0., 0., 0.];
person.calcBmi = function (){
    for ( var i=0; i<this.name.length; i++ ){
        this.bmi[i] = this.mass[i]/( this.height[i] * this.height[i] );
        this.bmi[i] = this.bmi[i].toFixed(2);
    }
}
person.sort = function (){
    for ( var i=0; i<this.name.length; i++ ){
        for ( var j=i+1; j<this.name.length; j++ ){
            
            if ( this.bmi[i] < this.bmi[j] ){
                var temp = this.name[i];
                this.name[i] = this.name[j];
                this.name[j] = temp;
                temp = this.mass[i];
                this.mass[i] = this.mass[j];
                this.mass[j] = temp;
                temp = this.height[i];
                this.height[i] = this.height[j];
                this.height[j] = temp;
                temp = this.bmi[i];
                this.bmi[i] = this.bmi[j];
                this.bmi[j] = temp;
            }

        }
    }
}

person.calcBmi();
person.sort();
console.log( person );
console.log();


