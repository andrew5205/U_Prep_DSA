
// JavaScript does not have pre buildin linked list library 

// have to create by your own 


// good tool to visual Linked list 
// https://visualgo.net/en/list?slide=1


// ******************************************************************** //

// const basket = ['apples', 'grapes', 'pears']

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

// ******************************************************************** //


// use while looop 
// dont usually know how long the list is going to be 


//// ******************************************************************** //


// prepand -> O(1)
// append  -> O(1)
// lookup  -> O(n)
// insert  -> O(n)
// delete  -> O(n)

// ******************************************************************** //

// pointer is a referance to another place in memory or another object or node 
// only one entry ( which is obj1)
let obj1 = { a: true};
let obj2 = obj1;

// obj1 obj2 point to the same address in memory

// obj2 is jsut a referance of obj1, 
// which is just a referance 
// object is a pointer, not copying the object

// ******************************************************************** //


// garbage collection
let object1 = { a: true };
let object2 = object1;  // this is just a referance 
object1.a = 'gonna change';
delete object1;

// console.log('1', object1);
console.log('2', object2);      // 2 { a: 'gonna change' }

// when object1 has been deleted 
// JavaScript knows there is another referance point to that address 

object2 = 'hello';
console.log('2', object2);      // 2 hello
// the original referance { a: true } will garbage collected 
// redefine object2 as a string 'hello



