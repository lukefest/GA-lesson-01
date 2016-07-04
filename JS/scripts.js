



//Luke's bash at variable arrays

var favourite_Comics = ["The Amazing Spiderman", "New X-Men", "The Watchmen","Spiderman 2099"];
favourite_Comics.reverse();


// ------------------------------------------------------------
// ::::::::::::::::: Guy's Variables examples :::::::::::::::::
// ------------------------------------------------------------

//VARIABLES

//We create a variable using the varkeyword.
var a;

//This de nes a variable called awith no value.
a = 10;

//More commonly, variables are de ned and assigned a value in one go:
var firstName = 'guy';
var score = 10;

//Variables can have their value changed by referencing them by name.
var score = 10; // initialize score var to 10
score = 11; // score is now 11


//VARIABLE OPERATIONS

//We can perform a number of opertations on variables such as adding them together:
var score = 0;
score = score + 10; // score is 10
score += 10; // score is 20
score++; // score is 21
//score; // score is            //makes linter angry for some reason
score-=10; // score is 10
score=score-10; // score is 0


//VARIABLE CONVERSION

// IF ELSE STATEMENTS - See old_enough.js

//.............


// TERNARY OPERATORS

//e.g. (adult holds value 'no')

var age = 12;
var adult = age > 18 ? 'yes': 'no';

// Types of conditional

// > more than                  //makes linter angry for some reason
// < less than                  //makes linter angry for some reason
// >= more than or equal to     //makes linter angry for some reason
// <= less than or equal to     //makes linter angry for some reason
// === equal to                 //makes linter angry for some reason
// !== not equal to             //makes linter angry for some reason
