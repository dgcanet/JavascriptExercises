function CodelandUsernameValidation(str) { 

  // code goes here
  const isNullOrEmpty = (str === null || str.trim() === '');
  const hasRightLength = (str.length >= 4 && str.length <= 25) ? true : false;
  const endsWithUnderscore = (/_$/.test(str));
  const startsWithLetter = /^[A-Za-z]/.test(str.charAt(0));
  
  const validPattern = /^[A-Za-z0-9_]+$/.test(str);

  let result = false;
  if(!isNullOrEmpty) {
    if(hasRightLength && validPattern && startsWithLetter && !endsWithUnderscore) {
      result = true;
    }
    else {
      result = false;
    }
  } 

  return result; 

}

   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));