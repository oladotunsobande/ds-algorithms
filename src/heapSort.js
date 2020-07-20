function HeapSort(order, array){
  this.order = order;
  this.array = array;
  this.items = [];
}

HeapSort.prototype.swap = function(index1, index2){
  let temp = this.items[index1];

  this.items[index1] = this.items[index2];
  this.items[index2] = temp;
}

HeapSort.prototype.parentIndex = function(index){
  return Math.floor((index - 1) / 2);
}

HeapSort.prototype.leftChildIndex = function(index){
  return (index * 2) + 1;
}

HeapSort.prototype.rightChildIndex = function(index){
  return (index * 2) + 2;
}

HeapSort.prototype.parent = function(index){
  return this.items[this.parentIndex(index)];
}

HeapSort.prototype.leftChild = function(index){
  return this.items[this.leftChildIndex(index)];
}

HeapSort.prototype.rightChild = function(index){
  return this.items[this.rightChildIndex(index)];
}

HeapSort.prototype.push = function(item){
  this.items.push(item);
}

HeapSort.prototype.peek = function(){
  return this.items[0];
}

HeapSort.prototype.size = function(){
  return this.items.length;
}

HeapSort.prototype.setInput = function(){
  console.log(`unsorted array: ${this.array}`);

  for(let i = 0; i < this.array.length; i++){
    this.add(this.array[i]);
  }
  console.log(this.items);
}

HeapSort.prototype.add = function(item){
  this.items.push(item);
  this.bubbleUp();
}

HeapSort.prototype.sort = function(){
  let start = 1, sortedArray = [];

  while(start <= this.array.length){
    sortedArray.push(this.poll());
    start++;
  }

  console.log(`sorted array: ${sortedArray}`);
}

HeapSort.prototype.poll = function(){
  let item = this.items[0];

  this.items[0] = this.items[this.items.length - 1]; // Copy last element to index 0
  this.items.pop(); // Remove last element from array
  this.bubbleDown();

  return item;
}

HeapSort.prototype.bubbleUp = function(){
    let index = this.items.length - 1;
    
    // From the last index, bubble up
    if(this.order === 'asc'){
      while(this.parent(index) && (this.parent(index) > this.items[index])){
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
      }
    } else{
      while(this.parent(index) && (this.parent(index) < this.items[index])){
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
      }
    }
}

HeapSort.prototype.bubbleDown = function(){
  let index = 0;

    // From the first index, bubble down
    if(this.order === 'asc'){
      while(this.leftChild(index) && 
        (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])
      ){
        let smallerIndex = this.leftChildIndex(index);

        if(this.rightChild(index) && (this.rightChild(index) < this.items[smallerIndex])){
          smallerIndex = this.rightChildIndex(index);
        }

        this.swap(smallerIndex, index);
        index = smallerIndex;
      }
    } else{
      while(this.leftChild(index) && 
        (this.leftChild(index) < this.items[index] || this.rightChild(index) > this.items[index])
      ){
        let biggerIndex = this.leftChildIndex(index);

        if(this.rightChild(index) && (this.rightChild(index) > this.items[biggerIndex])){
          biggerIndex = this.rightChildIndex(index);
        }

        this.swap(biggerIndex, index);
        index = biggerIndex;
      }
    }
}

module.exports = HeapSort;