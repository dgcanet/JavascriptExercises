function BracketCombinations(num) { 

  // code goes here  
  const memo = {};

  function countCombinations(openCount, closeCount) {
    if (openCount === num && closeCount === num) {
      return 1; // Valid combination found
    }

    if (openCount > num || closeCount > openCount) {
      return 0; // Invalid combination
    }

    const memoKey = `${openCount}-${closeCount}`;
    if (memo[memoKey] !== undefined) {
      return memo[memoKey]; // Retrieve result from memoization
    }

    let count = 0;
    count += countCombinations(openCount + 1, closeCount); // Add an opening parenthesis
    count += countCombinations(openCount, closeCount + 1); // Add a closing parenthesis

    memo[memoKey] = count; // Store result in memoization
    return count;
  }

  return countCombinations(0, 0);

}
   
// keep this function call here 
console.log(BracketCombinations(readline()));