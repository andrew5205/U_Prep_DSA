
class Stack {
    constructor() {
        // set as empty array
        this.array = [];
    }
    peek() {
        return this.array[this.array.length-1];
    }
    push(value) {
        // next line use built-in function in JS
        this.array.push(value);
        return this;
    }
    pop() {
        // next line use built-in function in JS
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


  //Discord
  //Udemy
  //google