function getMiddle(s) {
  // const lengthOfS = s.length;
  // if(s.length === 1) {
  //   return s;
  // }
  // if (s.length === 2) {
  //   return " ";
  // }

  // if (s.length%2 === 0) {
    
  //   return s[s.length/2 - 1] + s[s.length/2];
  // }

  // if (s.length%2 > 0) {
    
  //   return s[Math.floor(s.length/2)];
  // }

  return s.length === 1 ? s : s.length === 2 ? " " : s.length%2 === 0 ? s[s.length/2 - 1] + s[s.length/2] : s.length%2 > 0 ? s[Math.floor(s.length/2)] : false;
 
}

console.log(getMiddle("test")) //> "es"
console.log(getMiddle("testing")) //> "t"
console.log(getMiddle("middle")) //> "dd"
console.log(getMiddle("A")) //> "A"