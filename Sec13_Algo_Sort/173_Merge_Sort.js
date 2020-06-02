
// Merge Sort - 
// time complexity: O(n log n)
// space complexity: O(n)



// We're going to take this list and actually divide it in half and then we're going to divide each of
// these subsets into half again.
// And then we're going to divide those salbe lists into half again until we have one item and once we
// have that divided up we're going to take the first item in second item and say hey which one should



// Mergesort is a general purpose sorting algorithm that adopts a divide and conquer approach.
// sometimes used internally by JavaScript with Array.prototype.sort().
// O (N log N)

// part 1, split array till single item 
function mergeSort(arr) {
    if ( arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

// Part 2, merge left rigth 
function merge(left, right) {
    let arr = [];

    while ( left.length && right.length) {
        if ( left[0] < right[0] ) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left).concat(right);
}

console.log(mergeSort([9,3,6,2,4,5,7,1,8,10]));     // [1,2,3,4,5,6,7,8,9,10]



// ///////////////////////////////////////////////////////////////////////////////////////////////////
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// part 1, split array till single item 
// use recursion, left right 

function mergeSort (array) {
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle) 
    const right = array.slice(middle)
    // console.log('left:', left);
    // console.log('right:', right);


    return merge( mergeSort(left), mergeSort(right) );
}

// Part 2, merge left rigth 
// comparison left right
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && 
        rightIndex < right.length) {
            if(left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++
            }
        }  
    // console.log(left, right)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);



// ****************************************************************************** //

// Extra Reading
// https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important

