
// https://www.w3schools.com/jsref/jsref_sort.asp


// compareFunction
// Optional. A function that defines an alternative sort order. 
// The function should return a negative, zero, or positive value, depending on the arguments, 
// like: function(a, b){return a-b}
// When the sort() method compares two values, it sends the values to the compare function, 
// and sorts the values according to the returned (negative, zero, positive) value.


const basket = [2, 65, 34, 2, 1, 7 ,8];

basket.sort(function ( a, b) {
    return a - b;       // [1, 2, 2, 7, 8, 34, 65]
})


function ( a, b) {
    return b - a;       // [65, 34, 8, 7, 2, 2, 1]
}

console.log(basket);



// Bubble sort 
// Insertion sort 
// Selection sort 
// Merge sort 
// Quicj sort