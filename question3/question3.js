// Let's say you have a list of N+1 integers between 1 and N. You know there's at least one
// duplicate, but there might be more. For example, if N=3, your list might be 3, 1, 1, 3 or it might
// be 1, 3, 2, 2. Print out a number that appears in the list more than once. (That is, in the first
// example, you can print '1' or '3' -- you don't have to print both.)
// Program Input: A list of numbers between 0 and N, all integers, comma separated.
// Program Output: A list of all numbers that are duplicated in the list.

function findDuplicates(numberArr) {
  let obj = {};
  let result = [];

  for (let i = 0; i < numberArr.length; i++) {
    if (obj[numberArr[i]]) {
      obj[numberArr[i]]++;
    } else {
      obj[numberArr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] >= 2) {
      result.push(Number(key));
    }
  }
  return result;
}
