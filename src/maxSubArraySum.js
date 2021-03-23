//const list = [-3,5,6,1,-8,-1,2,8];
// [-2,3,-4,5]
const list = [3,7,4,6,5];
const arrs = [];
let sumList = [];

function computeSum(arr) {
  let sum = 0;

  const status = arr.every((vl) => {
    return vl > 0;
  });

  if (!status) {
    arr.forEach((vl) => sum += vl );
  }

  addToList(sum);
}

function addToList(value) {
  sumList.push(value);
  sortArray();
}

function sortArray() {
  sumList.sort((a,b) => { return b - a });
}

function getMaxSum() {
  return sumList[0];
}

function getSum(index, arr) {
  if (arr.length == 1) {
    console.log(`arr: ${arr}`);
    addToList(arr[0]);
    return;
  } else if (arr.length == 2) {
    console.log(`arr: ${arr}`);
    addToList(arr[0] + arr[1]);
    return;
  } else if (arr.length > 2) {
    let first = arr[0];

    addToList(first);
    let newArray = [first];

    let j = index + 1;
    const limit = arr.length;
    for (; j < limit; j++) {
      if (j % 2 == 0) {
        console.log(`arr: ${first},${arr[j]}`);
        addToList(first + arr[j]);
      } else {
        newArray.push(arr[j]);
      }
    }
    console.log(`arr: ${newArray}`);

    computeSum(newArray);
  }
}

function processData(arr) {
  for (let i = 0; i < arr.length; i++) {
    addToList(arr[i]);

    let leftArray = [arr[i]];
    let rightArray = arr.slice(i + 2);

    if (rightArray.length >= 1) {
      getSum(i, leftArray.concat(rightArray));
    } else {
      getSum(i, leftArray);
    }
  }

  console.log(`Sum array: ${sumList}`);
  console.log(`Max. Sum is ${getMaxSum()}`);
}

processData(list);