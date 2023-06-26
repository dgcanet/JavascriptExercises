function TreeConstructor(strArr) {
  const childCount = {};
  const parentCount = {};

  for (let i = 0; i < strArr.length; i++) {
    const [child, parent] = strArr[i]
      .replace(/[()]/g, '') // Remove parentheses
      .split(',');

    if (childCount[child]) {
      childCount[child]++;
    } else {
      childCount[child] = 1;
    }

    if (parentCount[parent]) {
      parentCount[parent]++;
    } else {
      parentCount[parent] = 1;
    }

    if (childCount[child] > 1 || parentCount[parent] > 2) {
      return 'false'; // Violation of binary tree conditions
    }
  }

  return 'true';
}
   
// keep this function call here 
console.log(TreeConstructor(readline()));