const prompt = require( "prompt-sync" )( {sigint: true} );

function sleep ( ms ){
    return new Promise( resolve => setTimeout( resolve, ms ) );
}

async function getName (){
    console.log( "Hi there!" );
    await sleep( 1000 );
    console.log( "What's your name?" );
    let firstName = prompt ( "> " );
    console.log( `Why hello there Mr. ${firstName}!` );
    await sleep( 1000 );
    console.log( "As you understood, the async function is the" );
    console.log( "only one that pauses..." );
}


getName();
console.log();


