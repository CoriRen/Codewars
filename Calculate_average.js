/* Calculate Average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/

function findAverage(array) {
    if (array.length >= 1){
      return (array.reduce((s,a)=>s+a,0)) / (array.length) 
    }else{
      return 0
    }
    
  }

