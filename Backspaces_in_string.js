/**Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  "" */

function cleanString(s) {
  
    let arr = [];
  
    s.split('').forEach((char)=>{
  
      if (char === '#'){
        arr.pop()
      }else if (char !== '#'){
        arr.push(char)
      }
    });
    return arr
  }

  //refactored

  function cleanString(s) {
  
    let arr = [];
  
    s.split('').forEach((char)=>{
  
      if (char === '#') arr.pop()
      if (char !== '#') arr.push(char)

    });
    return arr.join('')
  }