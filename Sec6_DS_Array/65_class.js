
// JavaScript 

// number 
// string 
// Booleannull 
// undefined




// reference type 

[] === [];  // false
[1] === [1];  // false

var object1 = { val: 10};
var object2 = object1;          // object2 is referenced object1, get whatever inside object1
var object3 = { val: 10};

// think of object1 is in box1 
// object2 get everything from box1 (reference)
// object3 is in box3

// object1 object3 has the same value, but in different box

console.log(object1 === object2);   // true 
console.log(object1 === object3);   // false
console.log(object1 == object3);   // false
console.log(object1.value == object3.value);   // true


// ******************************************************************************************** //
// context 
// scope is exisiting between {}

// this is a window object
// refer to what enviorment we are in right now 
// current scope 


// in browser console
// console.log(this === window);   // true


const object4 = {
    a: function() {
        console.log(this);
    }
}

console.log(typeof(object4.a));     // function 
console.log(typeof(object4));     // object 
console.log(object4);     // object { a: [Function: a] }




// ******************************************************************************************** //
// instanaiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

// when extends from super class
// use keyword "super"
class Wizard extends Player {
    constructor( name, type) {
        // super( "property that wanna get access from constructor ")
        super(name, type);
        // super has to run before 
        console.log('wizard', this);
    }
    play() {
        console.log(`I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

console.log(wizard1.play());
console.log(wizard1.introduce());




