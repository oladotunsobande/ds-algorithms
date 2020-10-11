const expect = require('expect');

const HeapSort = require('../src/heapSort');
const Queue = require('../src/queue');
const Stack = require('../src/stack');

const {
  stringArray,
  numberArray
} = require('./mock');

const heapSort = new HeapSort('dsc', arr);
heapSort.setInput();
heapSort.sort();

describe('JS data structures and algorithms', () => {

  it('should sort string array in ascending order', () => {
    const heapSort = new HeapSort('asc', stringArray);
    heapSort.setInput();
    heapSort.sort();
  });

  it('should sort string array in descending order', () => {
    const heapSort = new HeapSort('dsc', stringArray);
    heapSort.setInput();
    heapSort.sort();
  });

  it('should sort number array in ascending order', () => {
    const heapSort = new HeapSort('asc', numberArray);
    heapSort.setInput();
    heapSort.sort();
  });

  it('should sort number array in descending order', () => {
    const heapSort = new HeapSort('dsc', numberArray);
    heapSort.setInput();
    heapSort.sort();
  });

});