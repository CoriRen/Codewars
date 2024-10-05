/*The Supermarket Queue
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.*/

const queueTime = (customers, n) => {
  
    let checkoutTime = customers.reduce((a,c)=>a+c,0)
    let tills = Array(n).fill(0);
    
    if (customers.length === 0){
      return 0
    }
    if (n > checkoutTime){
      return Math.max(...customers)
    } 
    
    customers.forEach(customer =>{
      let openTill = tills.indexOf(Math.min(...tills));
      tills[openTill] += customer;
    });
    
     return Math.max(...tills)
  }