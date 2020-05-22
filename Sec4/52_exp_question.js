
// // for example 
// // const array1 = ['a', 'b', 'c', 'x'];
// // const array2 = ['x', 'y', 'i'];
// // should return false 


// // const array1 = ['a', 'b', 'c', 'x'];
// // const array2 = ['z', 'y', 'x'];
// // should return true 


// // 2 parameter - array - no size limit 
// // return boolean


// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// function compareTwoArray( arr1, arr2) {
//     for ( let i = 0; i < arr1.length; i++) {
//         for ( let j = 0; j < arr2.length; j++) {
//             if ( arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(compareTwoArray(array1, array2));


// O(a*b) 
// O(1) - space complexity, not creating any new into array 


//  ********************************************************* // 


const array11 = ['a', 'b', 'c', 'x'];
const array22 = ['z', 'y', 'x'];


function compareTwoArray2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array 
    let map = {};
    for ( let i = 0; i < arr1.length; i++) {
        if ( !map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // console.log(map);

    // loop through second array and check if item in second array exists on created object
    for ( let j =  0; j < arr2.length; j++) {
        if ( map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

console.log(compareTwoArray2(array11, array22));

//  O(a+b)   time complexity
// O(a)   space complexity, create new object, takes arr1 



//  *********************************************************************** //

function compareTwoArray3(arr1, arr2) {
    return arr1.some( item => arr2.includes(item));
}

console.log(compareTwoArray3( array11, array22));


