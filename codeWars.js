// Consider an array of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
// 8/15/18

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

//My Solve
function countSheeps(arrayOfSheep) {
    var total = 0;
    for (i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        total ++
        };
    };
    return total;
};

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// 8/15/18

// My Solve
function boolToWord( bool ){
    if(bool) {
      return "Yes"
    } 
    else {
      return "No"
    };
  };

// Refactored using Conditional (ternary) Operator 
// Conditional (ternary) Operator (Evaluates expression before the '?' as either true or false,
// then returns the expression before the ':' if true, and the expression after the ':' if false
  function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }