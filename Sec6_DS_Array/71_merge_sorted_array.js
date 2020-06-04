

function mergeTwoArr(arr1, arr2) {

    const output = [];
    // validation input arr 
    if (arr1.length === 0) {
        return arr2; 
    }

    if ( arr2.length === 0) {
        return arr1;
    }

    // check elements 
    let current = 0;
    let i = j = 0;
    while( arr1[i] || arr2[j]) {
        // console.log(arr1[i], arr2[j]);

        // if arr2 is undefined, !arr2.length == !undefind == true
        // put arr1[i] to output array
        if ( !arr2.length || (arr1[i] < arr2[j])) {
            output[current] = arr1[i];
            i++;
        } else {
            // (arr2.length || arr[i] > arr2[j])
            // if arr2.length exist, || arr1 > arr2
            output[current] = arr2[j];
            j++;
        }
        current++;
    }

    return output;
}

// if array empty out first
console.log('answer', undefined < 8);       // false
// cause it jump into else statement 
// allowed to push the rest from arr2 

console.log(mergeTwoArr([1,3,5,7], [2,4,6,8,9]));





// ********************************************************************* //
// function mergeTwo(arr1, arr2) {
//     let arr3 = arr1.concat(arr2);
//     return arr3.sort();
// }

// console.log(mergeTwo([1,3,5,7], [2,4,6,8]));

// ********************************************************************* //

// function mergeSortedArray(array1, array2) {
//     const mergedArray = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];

//     let i = 1;
//     let j = 1;

//     // check input 
//     if ( array1.length === 0) {
//         return array2;
//     }
//     if ( array2.length === 0) {
//         return array1;
//     }

//     while( array1Item || array2Item) {
//         if ( ! array2Item || array1Item < array2Item) {
//             mergedArray.push(array1Item);
//             array1Item = array1[i];
//             i++;
//         } else {
//             mergedArray.push(array2Item);
//             array2Item = array2[j];
//             j++;
//         }
//     }

//     return mergedArray;
// }

// console.log(mergeSortedArray([1,2,4,10], [3,5,6,7,8]));





