/**Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

function solution(string) {
    let arr = []
  
    string.split('').forEach(char => {
      if (char === char.toUpperCase()){
        arr.push(" " + char)
      }else {
        arr.push(char)
      }
    });
  return arr.join('')
}

//refactored

function solution(string) {
    let arr = []
  
    string.split('').forEach(char => {
      char === char.toUpperCase()? arr.push(" " + char) : arr.push(char)
    });
  return arr.join('')
}