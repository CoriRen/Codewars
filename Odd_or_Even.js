// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    let sumOfArray = array.reduce((sum, acc) => sum + acc,0)
    if (sumOfArray%2 === 0){
      return "even"
    }else if (sumOfArray%1 === 0){
      return "odd"
    }
  }