for ( var i=0; i<10; i++ ){
    console.log( i + ": " + i );
}
console.log();

var j=0
while ( j<10 ){
    console.log( j + ": " + j );
    j++;
}
console.log();

j=-1
do {
    j++
    if ( j>=2 && j<=5 ){
        console.log();
        continue;
    }
    console.log( j + ": " + j );
} while ( j<9 )
