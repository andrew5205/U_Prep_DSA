// insert      // O(1)
// lookup      // O(1)
// delete      // O(1)
// search      // O(1)


// Hash table -> object -> no order 
// Hash map -> order 
// Hash set -> keys only 



// object: order is not guaranteed 
let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhhh!');
    }
}


user.age;   // O(1)
user.spell = 'abra kadabra';    // O(1)
user.scream();  // O(1)


// in order guaranteed 
const a = new Map();

// like Map(), but only store keys 
const b = new Set();

