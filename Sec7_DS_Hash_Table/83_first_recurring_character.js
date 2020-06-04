
// which elemntn in an array repeat first 

// Given array = [2,5,1,2,3,5,1,2,4];
// it should return 2 

// given array = [2,1,1,2,3,5,1,2,4];
// it should return 1

// given arrar = [ 2,3,4,5]; 
// should return undifined


// *********************************************************************************** //
// memory capasity O(n)
// time capasity O(1)
function checkRepeat(arr) {
    let dict = {};
    for ( let i = 0; i < arr.length; i++) {
        if ( !dict[arr[i]] ) {
            dict[arr[i]] = 1;
        } else {
            return arr[i];
        }
    }
    return undefined;
}

console.log(checkRepeat([2,5,1,2,3,5,1,2,4]));   // 2
console.log(checkRepeat([2,1,1,2,3,5,1,2,4]));   // 1
console.log(checkRepeat( [2,3,4,5]));            // undefined
// *********************************************************************************** //


// first recurring number by index
// need improvement on case TWO
// two for loop 
function checkUsingForLoop(arr) {
    for ( let i = 0; i < arr.length; i++) {
        // always check starting the one after 
        for ( let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
        Console.log(arr[i], arr[j]);
    }
    return undefined;
}

console.log(checkUsingForLoop([2,5,1,2,3,5,1,2,4]));
// console.log(checkUsingForLoop([2,1,1,2,3,5,1,2,4]));
// console.log(checkUsingForLoop([2,3,4,5]));

