
function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are numbers:');
    numbers.forEach( number => {console.log(number)});  //O(n)

    console.log('and these are their sum:');
    numbers.forEach( firstNumber => {
        numbers.forEach( secondNumber => {
            console.log(firstNumber + secondNumber);    // O(n^2)
        });
    });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]);        // O(n^2)