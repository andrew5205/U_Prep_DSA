
// good tool to visual Linked list 
// https://visualgo.net/en/list?slide=1



// 1 ->10 ->5 ->16 

// let myLinkedList = {
//     head: {
//         val: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }


// *********************   this is the diff from 92_create_linked_list   ***************** //
// create a Node class
// dont repeat yourself while creating a node 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// **************************************************************************************** // 



// create a linked list class 
// only takes value 
class LinkedList {
    // constructor only define the very first linked listnode 
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        // for the head node, the tail is its self as well 
        this.tail = this.head;
        this.length = 1;        // this is just for visualization, not necessary for Linked list
    }

    append(value) {
        // // code here 
        // // create a node 
        // const newNode = {
        //     value: value,
        //     next: null
        // };
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        // // create a node 
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}




// starting the head with value 10 
const myLinkedList = new LinkedList(10);


myLinkedList.append(5);
myLinkedList.append(50);
myLinkedList.append(16);

myLinkedList.prepend(1);


console.log(myLinkedList);  
// LinkedList {
//     head: { value: 10, next: null },
//     tail: { value: 10, next: null },
//     length: 1
// }


