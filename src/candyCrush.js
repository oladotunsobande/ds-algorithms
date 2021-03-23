const minCharCount = 3;
const maxCharCount = 5;
const multiples = [];

var hrstart = process.hrtime();

const sample = 'ABCCCDAAAAEEBBBC';

function setPossibleCombinations(arr) {
  arr.forEach((vl) => {
    for (let i = minCharCount; i <= maxCharCount; i++) {
      let newString = vl.repeat(i);
      multiples.push(newString);
    }
  });
  console.log(multiples);
}

function processData(input) {

  const contents = input.split('');

  const uniqueChars = Array.from(new Set(contents));
  //setPossibleCombinations(uniqueChars);

  for (let i = 0; i < uniqueChars.length; i++) {
    let value = uniqueChars[i];
    let foundMultiples = [];

    for (let j = minCharCount; j <= maxCharCount; j++) {
      let newString = value.repeat(j);

      let index = input.indexOf(newString);
      if (index >= 0) {
        foundMultiples.push(newString);
      }
    }
    console.log(`char: ${value} | multiples: ${foundMultiples}`);

    if (foundMultiples.length >= 1) {
      let lastItem = foundMultiples[foundMultiples.length - 1];

      input = input.replace(lastItem, '');
    }
  }

  console.log(`final: ${input}`);
  var hrend = process.hrtime(hrstart);

  console.info(`Execution time: ${hrend[0]}s ${hrend[1] / 1000000}ms`);
} 

processData(sample);