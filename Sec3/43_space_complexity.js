
// Heap is usually where we store variables 
// that we assign values to 


// stack is usually where we keep track of our function calls 


function booo(n) {
    for ( let i = 0; i< n.kength; i++) {
        console.log('booo!');
    }
}

booo([1,2,3,4,5]);      // O(1) for space cause not adding anything to array 


// ************************************************************************************* //
function arrayOfNTimes(n) {
    let hiArray = [];
    for ( let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}
arrayOfNTimes(10);      // O(n)
