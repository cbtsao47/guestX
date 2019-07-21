// Let's say you have a list of N+1 integers between 1 and N. You know there's at least one
// duplicate, but there might be more. For example, if N=3, your list might be 3, 1, 1, 3 or it might
// be 1, 3, 2, 2. Print out a number that appears in the list more than once. (That is, in the first
// example, you can print '1' or '3' -- you don't have to print both.)
// Program Input: A list of numbers between 0 and N, all integers, comma separated.
// Program Output: A list of all numbers that are duplicated in the list.
function findDuplicates(numberArr) {
  // create a cache obj
  let obj = {};
  let result = [];
  // map the number as the key of the obj and increase the count of the value by 1
  for (let i = 0; i < numberArr.length; i++) {
    if (obj[numberArr[i]]) {
      obj[numberArr[i]]++;
    } else {
      obj[numberArr[i]] = 1;
    }
  }
  // loop over the obj and return all the ones that are duplicated
  for (let key in obj) {
    if (obj[key] >= 2) {
      result.push(Number(key));
    }
  }
  return result;
}
// linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
}

console.log(
  linearSearch([34, 56, 1, 2], 1) // 2
);
// Binary Search
function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  let middle = Math.floor((left + right) / 2);
  let notFound = left < right;
  let index = -1;
  while (notFound) {
    if (sortedArr[middle] < target) {
      left = middle + 1;
    }
    if (sortedArr[middle] > target) {
      right = middle - 1;
    }
    if (sortedArr[middle] === target) {
      notFound = false;
      index = middle;
    }
    middle = Math.floor((left + right) / 2);
  }
  console.log("nope");
  return index;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 19));
