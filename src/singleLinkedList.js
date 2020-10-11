function SingleNode(data){
  this.data = data;
  this.next = null;
}

// Single LinkedList implementation
function SingleLinkedList(){
  this.head = null;
  this.size = 0;
}

SingleLinkedList.prototype.isEmpty = function(){
  return this.size == 0;
}

SingleLinkedList.prototype.insert = function(value){
  if(this.head == null){
    this.head = new SingleNode(value);
  } else{
    let temp = this.head;

    this.head = new SingleNode(value);
    this.head.next = temp;
  }

  this.size++;
}

SingleLinkedList.prototype.remove = function(value){
  if(this.isEmpty()) throw 'Linked list is empty';

  let currentHead = this.head;

  if(currentHead.data === value){
    this.head = currentHead.next;
    this.size--;
  } else{
    // Search head and middle of linked list
    let prev = currentHead;
    while(currentHead.next){
      if(currentHead.data === value){
        prev.next = currentHead.next;
        currentHead = currentHead.next;
        
        break;
      }

      prev = currentHead;
      currentHead = currentHead.next;
    }

    // If value not found in head and middle, search tail
    if(currentHead.data === value){
      prev.next = null;
    }

    this.size--;
  }
}

SingleLinkedList.prototype.print = function(){
  let n = this.size;
  let currentHead = this.head;

  while(n > 0){
    console.log(`${n}: ${JSON.stringify(currentHead)} -> ${JSON.stringify(currentHead.next)}`);
    currentHead = currentHead.next;
    n--;
  }
}

const single = new SingleLinkedList();
single.insert(6);
single.insert(20);
single.insert(65);
single.insert(8);
single.insert(12);
single.insert(45);

single.print();

single.remove(65);

single.print();