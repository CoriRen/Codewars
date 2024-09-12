/*Playing with digits:
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.*/


function digPow(n, p){
  let nums = n.toString().split('').map((num)=> +num)
  let k = nums.reduce((sum,num,index) => sum+ Math.pow(num, p + index),0)
  return (k % n ===0)? (k/n): -1
 }
