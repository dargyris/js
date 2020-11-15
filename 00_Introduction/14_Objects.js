var John = {
    firstName: "John", // key - value pair
    lastName: "Smith", 
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher", 
    isMarried: false,

    calcAge: function (){
        this.age = 2018 - this.birthYear;
    }
};


console.log( John.firstName );
var x = "birthYear";
console.log( John[x] );
console.log();

John.calcAge();
//console.log( John.calcAge() );
console.log();

John.job = "designer";
John["isMarried"] = true;
console.log( John );
console.log();

var Jane = new Object();
Jane.name = "Jane";
Jane.birthYear = 1969;
Jane["lastName"] = "Smith";
console.log( Jane );
