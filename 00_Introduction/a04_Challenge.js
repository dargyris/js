var mMass, jMass, mHeight, jHeight, mBmi, jBmi;

mMass = 60;
mHeight = 190; 

jMass = 90;
jHeight = 160; 

mBmi = mMass / (mHeight*mHeight);
jBmi = jMass / (jHeight*jHeight);

var mjCompBmi = mBmi > jBmi;
console.log( "Mark's Bmi\t:" + mBmi );
console.log( "John's Bmi\t:" + jBmi );
console.log( "\nMark's Bmi > John's Bmi:\t" + mjCompBmi );

if ( mBmi < jBmi ){
    console.log( "\nThin and tall makes smaller BMIs!" );
}
