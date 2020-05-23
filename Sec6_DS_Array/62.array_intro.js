
const strings = ['a', 'b', 'c', 'd'];

// look up
strings[2];     // O(1)


// push 
strings.push('e');      // O(1) //not looping anything
                        // or can be O(n), copy orginal array(size), and append  
console.log(strings);


// pop 
strings.pop()       //O(1)  // not looping anything
console.log(strings);


// unshift          // O(n)  // after add 'x', loop thru array ( modify index)
strings.unshift('x')


// splice           // O(n)  // after insert, loop through the array 
strings.splice(2, 0, 'alien');


console.log(strings);



