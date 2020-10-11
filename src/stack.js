function Stack(array){
  this.array = [];
  if(array) this.array = array;
}

Stack.prototype.insert = function(item){
  this.array.push(item);
}

Stack.prototype.delete = function(){
  this.array.pop();
}

Stack.prototype.peek = function(){
  return this.array[this.array.length - 1];
}

Stack.prototype.getBuffer = function(){
  return this.array.slice();
}

Stack.prototype.getElementAtNthPosition = function(pos){
  if(pos < 0 || pos > this.array.length) throw 'Invalid position';

  let idx = this.array.length - 1;
  let bufferArray = this.getBuffer();

  while(idx != pos - 1){
    bufferArray.pop();
    idx--;
  }

  return bufferArray.pop();
}