const day = "nday";

switch ( day ){ // Strict equality! ===
    case "Monday":
        console.log( `Plan structure.` );
        console.log( `Buy tomatoes!` );
        break;
    case "Tuesday":
        console.log( `Prepare the videos.` );
        console.log( `Buy more tomatoes!` );
        break;
    case "Wednesday":
        console.log( `Prepare the papers` );
        console.log( `Get some more tomatoes...` );
        break;
    case "Thursday": 
    case "Friday":
        console.log( `Get some other papers.` );
        console.log( `Get yet more tomatoes...` );
        break;
    case "Saturday":
    case "Sunday":
        console.log( "Enjoy the weekend!" );
        break;
    default:
        console.log( "Panic!! Oh no!" );
        break;
}
