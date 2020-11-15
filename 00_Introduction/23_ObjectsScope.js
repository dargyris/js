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
        console.log( 2020-this.yearOfBirth );
    }
}

john.calculateAge();

var mike = {
    name: "Mike", 
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
