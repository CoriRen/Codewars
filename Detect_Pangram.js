/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

function isPangram(string){
    const alphabet = new Set();
    for (char of string.toLowerCase()) {
        if (char >="a" && char <="z") {
            alphabet.add(char);
        }
    }
    return alphabet.size === 26;
}

//v2

function isPangram(string){
    const arr = [];
   
    for (char of string.toLowerCase()) {
        if (char >="a" && char <="z") {
            arr.push(char);
        }
    }
    const alphabet = arr.filter((char, index) => arr.indexOf(char) === index)
  	return alphabet.length === 26

}