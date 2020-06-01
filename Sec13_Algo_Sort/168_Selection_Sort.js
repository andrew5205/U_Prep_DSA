// Selection Sort 
// time complexity O(n^2)
// space complexity O(1)



const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function selectionSort(arr) {
    for ( let i = 0; i < arr.length; i++) {
        let minIndex = i;       
        for ( let j = i+1; j < arr.length; j++) {   // j start at i + 1
            if ( arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [ arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr; 
}


console.log(selectionSort(numbers));


// ////////////////////////////////////////////////////////////////////////// //
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    for(let i = 0; i < length; i++){
        // set current index as minimum
        let min = i;
        let temp = array[i];
        for(let j = i+1; j < length; j++){
            if (array[j] < array[min]){
            //update minimum if current is lower that what we had previously
            min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

selectionSort(numbers);
console.log(numbers);