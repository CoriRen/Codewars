// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function stringToNum(string){
 return string.filter((char, index)=>char.indexOf(char)===index)
}

/******************************************************************************************************************* */
//Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCase = text.toLowerCase();

    return lowerCase.split('').map((char)=>alphabet.indexOf(char)+1).filter((num)=> num > 0).join(' ')
  }

  /******************************************************************************************************************* */
// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

function firstChar(str){
  const newStr = str.split(' ').map((word)=> word[0]).join('')
  return newStr
}

  /******************************************************************************************************************* 
   * Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

Examples:

"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"
StringsDebugging*/

function capitalizeWord(word) {
  return word[0].toUpperCase()+word.slice(1)
}



