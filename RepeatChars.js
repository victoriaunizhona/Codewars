// Version 1
// function accum(s) {
//   let str = "";
//   let num = 0;
//   for (i in s) {
//     str += s[i].toUpperCase();
//     if (num != 0) {
//       for (let j = 0; j < num; j++) {
//         str += s[i].toLowerCase();
//       }
//     };
//     str += "-";
//     num++;

//   }
//   return str.slice(0, -1);
// }


// Version 2

function accum(s) {
  const c = s.length;
  let str = ''
  for (let i = 0; i < c; i++) {
    str += s[i].toUpperCase();
    str += s[i].toLowerCase().repeat(i);
    if (i == c - 1) return str;
    str += '-';
  }
}


let result = accum("ZpglnRxqenU");
console.log(result);

