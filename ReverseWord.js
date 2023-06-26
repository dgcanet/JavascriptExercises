function FirstReverse(str) { 

  // code goes here  
  
  let charArray = [];
  charArray = str.split("");
  charArray = charArray.reverse();
  let reversedWord = charArray.join("");
  return reversedWord; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));