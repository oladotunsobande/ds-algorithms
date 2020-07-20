const values = [
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
];

const query = "pablo";

function sortArray(arr, order){
  if(order === 'asc'){
    arr.sort();
  }
  else{
    arr.sort((a, b) => {
      if(a > b) return -1;
      if(b > a) return 1;
      return 0;
    });
  }

  console.log(arr);

  return arr;
}

function search(list, value){
  const arr = sortArray(list, 'asc');

  let start = 0;
  let stop = arr.length - 1;
  let mid = Math.floor((start + stop) / 2);

  while(arr[mid] != value && start < stop){
    console.log(`mid: ${mid} (${arr[mid]})`);

    if(value < arr[mid]){
      stop = mid - 1;
    } else if(value > arr[mid]){
      start = mid + 1;
    }

    mid = Math.floor((start + stop) / 2);
  }

  let indx = (arr[mid] != value) ? -1 : mid;

  console.log(`Search query: <${value}> - Found at index ${indx}`);
}

search(values, 'pablo');