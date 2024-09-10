/*The highest profit wins!

**Task**
Write a function that returns both the minimum and maximum number of the given list/array.

**Examples (Input --> Output)**
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

**Remarks**
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.*/

//Version 1
function minMax(arr){
  let sorted = arr.sort((a,b)=>a-b)
  let start = [sorted[0]]
  let end = [sorted[sorted.length-1]]
  let newArr = `${start},${end}`
  return newArr.split(",").map((num)=> +num)
}

//Version 2 (refactored)
function minMax(arr) {
  let sorted = arr.sort(function(a,b) {return a-b});
  return [sorted[0], sorted[a.length-1]];
}

//Version 3 (best practice)
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}