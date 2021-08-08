// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function sortArray(arr) {
  return arr.sort((a,b) => a - b);
}

function search(arr, value){
  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  while (arr[mid] != value && start < stop){
      if (value < arr[mid]){
          stop = mid - 1;
      } else if (value > arr[mid]){
          start = mid + 1;
      }

      mid = Math.floor((start + stop) / 2);
  }

  let indx = (arr[mid] != value) ? -1 : mid;
  return indx;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let uniqueArray = Array.from(new Set(A));

  let size = uniqueArray.length;
  let sortedArray = uniqueArray.sort((a, b) => { return a - b });

  if (sortedArray[size - 1] < 0 || sortedArray[size - 1] == 0) return 1;

  let sortedArray2 = sortedArray;
  let smallestValue;

  let i = 0;
  const limit = sortedArray.length;
  for (; i < limit; i++) {
      let next = sortedArray[i] + 1;
      if (next < 0) continue;

      let index = search(sortedArray2, next);

      if (index == -1) {
          smallestValue = next;
          break;
      }
  }

  if (smallestValue == undefined || smallestValue == 0) smallestValue = 1;
  return smallestValue;
}
