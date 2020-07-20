const HeapSort = require('./heapSort');
let arr = [5,6,8,2,4,9,7,67];
let arr2 = ['f','u','a','q','c','e','g','t','b'];

const heapSort = new HeapSort('dsc', arr);
heapSort.setInput();
heapSort.sort();