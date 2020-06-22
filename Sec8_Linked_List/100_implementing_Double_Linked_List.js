
// prepend -> O(1)
// append -> O(1)
// lookup -> O(n)   // O(n / 2) -> O(n) could start from both end
// insert -> O(n)
// delete -> O(n)




class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        // this.pre = null;
    }
}



class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            // one more than SLL
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    // print out whole list 
    printList() {
        const arr = [];
        let currentNode = this.head;
        while ( currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    append(value) {
        const newNode = new Node(value);

        // one more than SLL
        newNode.prev = this.tail;

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;

        // differ than SLL
        this.head.prev = newNode;

        this.head = newNode;
        this.length++;
        return this;
    }



    // lookup O(n)
    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }


    // O(n)
    insert(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
            console.log('yes')
            return this.append(value);
        }

        const newNode = new Node(value);
        
        // pre node before current 
        const front = this.traverseToIndex(index-1);
        // current 
        const current = front.next;

        // ***************************************** //
        // links for links with front node
        front.next = newNode;
        newNode.prev = front;

        // links with current node 
        newNode.next = current;
        current.prev = newNode;
        // ***************************************** //

        this.length++;
        return this.printList();
    }

    // delete O(n)
    remove(index) {
        // check params

        // pre node before current 
        const front = this.traverseToIndex(index-1);
        const behind = this.traverseToIndex(index+1);
        // current 
        const unWantedNode = front.next;

        front.next = unWantedNode.next;
        behind.prev = unWantedNode.prev;

        this.lenght--;
        return this.printList();
    }
}



const myDLL = new DoubleLinkedList(10);

myDLL.append(5);
myDLL.append(16);

myDLL.prepend(1);

console.log(myDLL)

myDLL.insert(2,99);
myDLL.remove(2);

console.log(myDLL.printList());

