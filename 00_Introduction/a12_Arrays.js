var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log( names );
console.log( names.length );

names[1] = "Ben";
names[names.length] = "Mary";
names[names.length] = "Chris";
names[names.length] = "Timo";

console.log( names );

var John = ["John", "Smith", 1990, "designer", false];

John.push("blue");
John.unshift("Mr.");
console.log( John );
John.pop();
John.pop();
John.shift();
console.log( John );
console.log( John.indexOf(23) );

var isDesigner = John.indexOf("designer") === -1 ? "John is NOT a designer": "John IS a designer.";
console.log( isDesigner );
