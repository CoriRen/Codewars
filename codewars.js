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