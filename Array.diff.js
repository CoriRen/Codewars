/*Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  
    for (let i = (a.length-1); i >= 0; i--){
      
      if (b.includes(a[i])){
        a.splice(i,1)
      }
    }
    return a
  }

  //version 2

  function arrayDiff(a, b) {
  
    return a.filter(num => !b.includes(num))
    }
