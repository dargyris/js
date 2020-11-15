const prompt = require( "prompt-sync" )( { sigint: true } );

choice = printMenu();
if ( choice === "Q" ){
    console.log( "Goodbye!" );
} else if ( choice === "1"  ) {
    const firstName = "Diamantis";
    const age = 32;

    const diamantis = `I'm ${firstName} and I'm ${age} years old.`;
    console.log( diamantis );
    console.log( `I can also use backticks to print anything!` );
    console.log( `I think it's better than the + notation...` );
    console.log();
    console.log( "Legacy mutli-liners \
were a dunging \
big problem..." );
    console.log( `This is 
    gray area here.
        What if I just want to do a new line
            in coding only?` );
} else {
    console.log( "Panic!\nQuitting..." );
}


function printMenu (){
    console.log( "=========================================" );
    console.log( "*\t\tWelcome!\t\t*" );
    console.log( "=========================================" );
    console.log();
    console.log( "What do you want to do?" );
    console.log( "1. Print string template." );
    console.log( "Q. Quit." );
    let choice = prompt( "> " );
    return choice;
}
