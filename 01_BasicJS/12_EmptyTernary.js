const prompt = require( "prompt-sync" )( {sigint: true} );

let theObject = {

    itsKey: [], 
    itsName: [] 

};

theObject.itsKey[0] = 0;

let isZero = theObject.itsKey[0] === 0;
isZero? console.log( `Key is zero!` ): null;
isZero? console.log( `Key is zero!` ): undefined;
isZero? console.log( `Key is zero!` ): true;
isZero? console.log( `Key is zero!` ): false;
isZero? console.log( `Key is zero!` ): "";
console.log();

console.log( `As it seems a ternary requires sth on the `
+ `rhs. The most elegant solution would probably be null. `
+ `That said, it's probably bad practice to use a ternary `
+ `operator this way. But it's kinda nice also...`);
console.log();

const hasLicence = true;
const canSee = true;
const shouldDrive = hasLicence && canSee;

if ( `${shouldDrive}` ){
    console.log( `She `
+ `is able to drive` );
}

console.log( `She ${hasLicence?"can": "can not"} drive.` );
