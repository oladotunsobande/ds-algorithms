function Queue(){
  this.array = [];
}

Queue.prototype.enqueue = function(item){
  this.array.push(item);
}

Queue.prototype.dequeue = function(){
  this.array.shift();
}

Queue.prototype.peek = function(){
  return this.array[0];
}

Queue.prototype.getBuffer = function(){
  return this.array.slice();
}
