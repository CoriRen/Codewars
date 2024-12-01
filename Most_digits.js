/**Most Digits
 
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */

function findLongest(array){

    let newArr = [];
  
    for (num of array){

        if (newArr.length === 0) newArr.push(num)
      
        if (num.toString().length > newArr[0].toString().length){
          newArr.pop()
          newArr.push(num)
        }
    }

    return newArr[0]
}