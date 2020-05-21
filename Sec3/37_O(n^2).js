
// log all pairs of array 
// nest loops => *

// const boxes = [1, 2, 3, 4, 5];
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(arr) {
    for ( let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr.length; j++) {
            console.log(arr[i] + arr[j]);
        }
    }
}

logAllPairsOfArray(boxes);


// O(n*n) -> O(n^2)





// // ES5 
// function logAllPairsOfArray(boxes) {
//     boxes.forEach(function(firstbox) {
//         boxes.forEach(function(secondBox) {
//             console.log(firstbox, secondBox);
//         });
//     })
// }

