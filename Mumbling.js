/*This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

function accum(s) {
	let arr = s.split('');
    let newArr =[];
  	for (let i = 0; i< arr.length; i++){
        newArr.push(arr[i][0].toUpperCase()+ arr[i].repeat(i).toLowerCase())
    }
    return newArr.join('-')
}

//refactored:

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}