const fs = require('fs');
const appRootPath = require('app-root-path');

const values = JSON.parse(fs.readFileSync(`${appRootPath.path}/data/population.json`));
/*const values = [
  "efetobore",
  "blessing",
  "tari",
  "spiff",
  "pablo",
  "abulu",
  "emu",
  "lucky",
  "jennifer",
  "muhammed",
  "prince",
  "deputy",
  "aisha",
  "goodluck",
  "science",
  "flamengo",
  "charlotte"
];*/

function sortArray(arr, order){
  if(order === 'asc'){
    arr.sort((a,b) => { return a.value - b.value });
    //arr.sort();
  }
  else{
    arr.sort((a, b) => {
      if(a > b) return -1;
      if(b > a) return 1;
      return 0;
    });
  }

  //console.log(arr);

  return arr;
}

function search(list, value){
  const arr = sortArray(list, 'asc');

  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  console.time('binary search');
  while(arr[mid] != value && start < stop){
    if(value < arr[mid].value){
      stop = mid - 1;
    } else if(value > arr[mid].value){
      start = mid + 1;
    }

    mid = Math.floor((start + stop) / 2);
  }

  let indx = (arr[mid].value != value) ? -1 : mid;

  console.log(`Search query: <${value}> - Found at index ${indx}`);
  console.timeEnd('binary search');
}

search(values, 855334675);