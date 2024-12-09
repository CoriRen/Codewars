/**In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try: */

function dup(arr) {
    const filteredArr = arr.map(str => {
        return str
        .split('')
        .filter((char,index)=> str.indexOf(char) === index)
        .join('');
    });
    return filteredArr
}