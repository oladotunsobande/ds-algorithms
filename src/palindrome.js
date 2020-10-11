function reverse(str){
  let new_str = '';
  let arr = str.split('');

  for(let i = arr.length - 1; i >= 0; i--){
    new_str += arr[i];
  }

  return new_str;
}

function replaceChar(str, index, char){
  let new_str = '';
  let new_arr = str.split('');

  new_arr[index] = char;

  new_arr.forEach((vl) => { new_str += vl; });

  return new_str;
}

function swap(array, idx1, idx2){
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function sort(array, val){
  for(let i = 1; i < array.length; i++){
    if(array[i] < val && array[i] < array[0]){
      swap(array, 0, i);
    }
  }

  return array;
}

function breakPalindrome(palindromeStr){
  let pald_str = palindromeStr.toLowerCase();
  let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let char_length = pald_str.length;
  let list = [];

  for(let i = 0; i < alphabets.length; i++){
    let char = alphabets[i];
    let changeCount = 0;

    for(let j = 0; j < char_length; j++){
      let new_str = replaceChar(pald_str, j, char);
      
      if(new_str === pald_str) continue;

      changeCount++;
      if(changeCount == 1 && new_str < pald_str) {
        list.push(new_str);
        break;
      }
    }
  }

  if(list.length == 0 || (reverse(list[0]) === pald_str && list.length == 1)) return 'IMPOSSIBLE';

  //list.sort();
  let new_list = sort(list, pald_str);
  if(reverse(new_list[0]) === pald_str) return 'IMPOSSIBLE';

  console.log(`list: ${list}`);
  console.log(list[0]);
}

function removeChars(word){
  console.log(`before: ${word}`);

  let characters = [',',':',';','-','.'];
  for(let i = 0; i < characters.length; i++){
    word = word.replace(characters[i],'');
  }

  console.log(`after: ${word}`);
  return word;
}

function processWord(word){
  let new_word = removeChars(word);
  let contents = new_word.split(' ');
  
  console.log(`before: ${contents}`);
  contents.map((vl) => {
    vl.trim();
  });

  console.log(`after: ${contents}`);
}

processWord('Cross-river  . has ,; 20   :');
//breakPalindrome('omo');