
const someArray = [];

// How to create an ARRAY class 
// loop through array --> O(n)


// 1. creating a class 
// 2. create a constructor 


class MyArray {
    constructor() {
        this.length = 0;
        // data is set to be object
        this.data = {};
    }
    // get method 
    get(index) {
        return this.data[index];
    }
    // push method 
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    // pop method
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    // delete method
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    // shift items to left
    shiftItems(index) {
        for ( let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        // after shift, delete the very last item 
        delete this.data[this.length-1]
        // decrement length 
        this.length--;
    }
}

const newArray = new MyArray;

newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();

newArray.delete(1);


console.log(newArray);      // yArray { length: 0, data: {} }

