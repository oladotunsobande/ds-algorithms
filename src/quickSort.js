const fs = require('fs');
const appRootPath = require('app-root-path');

const values = JSON.parse(fs.readFileSync(`${appRootPath.path}/data/population.json`));

function quickSort(arr) {
  const list = arr;

  if (list.length < 2) return list;

  const pivot = list[Math.floor(list.length / 2)].value;

  const smaller = list.filter((item) => item.value < pivot);
  const bigger = list.filter((item) => item.value > pivot);

  return [
    ...quickSort(smaller),
    pivot,
    ...quickSort(bigger),
  ];
}

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

console.time('quick sort');
quickSort(values);
console.timeEnd('quick sort');