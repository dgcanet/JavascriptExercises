function FirstFactorial(num) { 

  // code goes here
  let factorials = 1;
  for(let ctr = num; ctr > 0; ctr--){
    factorials = factorials * ctr;
  }

  return factorials; 

}
   
// keep this function call here 
console.log(FirstFactorial(readline()));