function swap(array, idx1, idx2){
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j <= i; j++){
      if(array[i] < array[j]){
        swap(array, i, j);
      }
    }
  }
}

let arr = [5,6,2,8,2,6,5,1,67];
bubbleSort(arr);