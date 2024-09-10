/*String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

function solution(str, ending){
  let num = str.length - ending.length
  let newStr = str.split('').slice(num).join('')
  return ending === newStr ? true : false
}

//OR
function solution(str, ending){
 return str.endsWith(ending)
}

