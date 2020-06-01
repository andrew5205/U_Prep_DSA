


function insertionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var current = arr[i];
        var j = i-1;

        while( j >= 0 && arr[j] > current) {
            // var temp = arr[j];
            // arr[j] = arr[j+1];
            // arr[j+1] = temp;
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));


