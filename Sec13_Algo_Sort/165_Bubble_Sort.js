

// time complexity: O(n^2)
// space complexity: O(1)


function buble_sort(arr) {
    let i = j = 0;
    for ( i = 0; i < arr.length; i++) {
        for ( j = 0; j < arr.length - i; j++) {
            if ( arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [ arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(buble_sort([2,4,5,3,8,6,7,1]));


// //////////////////////////////////////////////////////////////////////////// //


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    for ( let i = 0; i < length; i++) {
        for ( let j = 0; j < length; j++) {
            if ( array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(numbers));

