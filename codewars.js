/*Wheat/Rice Problem
If you know the number of rice grains there are, tell us how many chess squares have been used.*/

//v1
let grains = 0

function squaresNeeded(grains){
  return grains === 0 ? 0 : Math.floor(Math.log2(grains) + 1)
}
console.log(squaresNeeded(grains))

//v2
let cells = (grains) =>  grains === 0 ? 0 : Math.floor(Math.log2(grains)+1)

console.log(cells(0))

//v3 (better math)
function squaresNeeded(grains){
    return Math.ceil(Math.log2(grains + 1))
  }

/*Binary Addition:
Add two numbers and convert the sum to binary*/
  function addBinary(a,b) {
    return (a+b).toString(2);
  }
  console.log(addBinary(20,7))

/*Lilke or dislike:
Recreate the functionality of the Youtube like and dislike buttons*/
function likeOrDislike(buttons) {
  let state = 'Nothing';

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = 'Nothing'
    } else {
      state = buttons[i]
    }
  }

  return state
}


/*Simple Fun #384: Is Turing's Equation?*/
const s = "5+8=31";

function isTuringEquation(s){
 let nums = s.split(/[+=]/).map((n) => n.split('').reverse().join(''))
  console.log(`${nums[0]} + ${nums[1]} = ${nums[2]}`)
  return +nums[0]+ +nums[1] == +nums[2]
}

console.log(isTuringEquation(s))

/*DNA to RNA Conversion:
Replace T with U in a string*/

function DNA(dna) {
  return dna.replaceAll("T","U")
}

/*Sum  Mixed Array:
add together an array of strings and numbers*/

let sumMix = (x) => x.map((num) => +num).reduce((sum,acc)=>sum+acc,0)


//Function 2 - squaring an argument
let square = (num)=>num**2

//Sum of positive
//Only add the positive numbers of an array together
function positiveSum2(arr) {
  return arr.filter((num) => num > 0).reduce((sum, current)=> sum + current, 0)
}

//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi,'')  
}
