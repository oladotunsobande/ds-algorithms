const fs = require('fs');
const appRootPath = require('app-root-path');

const values = JSON.parse(fs.readFileSync(`${appRootPath.path}/data/population.json`));

function sortArray(arr, order){
  //console.log(`length: ${arr.length}`);
  if(order === 'asc'){
    arr.sort((a,b) => { return a.value - b.value });
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

console.time('linear sort');
sortArray(values);
console.timeEnd('linear sort');