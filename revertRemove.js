// Given a string str, reverse it omitting all non-alphabetic characters.


function reverseLetter(str) {
  if (str === "") { return "Empty string!" };
  str = str.replace(/\W/g, '');
  str = str.replace(/[0-9]/g, '');
  str = str.replace(/[^0-9a-z]/gi, '');
  return str.split("").reverse().join("");
}

console.log(reverseLetter(""));


// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

