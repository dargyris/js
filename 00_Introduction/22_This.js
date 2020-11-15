function calculateAge ( year ){
    console.log( 2016 - year );
//    console.log( this );
}

calculateAge( 1985 );

var john = {
    name: "John", 
    yearOfBirth: 1990,
    calculateAge: function (){
        console.log( this );
        console.log( this.yearOfBirth );

        function innerFunction (){
            console.log( this );
        }
        innerFunction();
    }
}

john.calculateAge();
