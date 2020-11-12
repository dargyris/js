var a = "Hello!";
first();

function first (){
    var b = "Hi!";
    second();

    function second (){
        var c = "Hey!";
        console.log( a + b + c ); // Has access to 
        // all variables above, outside the scope of functino "second"
    }
}
