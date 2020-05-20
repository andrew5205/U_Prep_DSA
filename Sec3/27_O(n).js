// linear

const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'gill', 'nigel', 'squirt', 'hank','darla', 'nemo']; 

// create a large array contains 1000 elements and fill in with 'nemo'
const large = new Array(1000000).fill('nemo');



function findNemo(arr) {

    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] === 'nemo') {
            console.log('Foound NEMO!');
        }
    }

}

// findNemo(nemo);
// findNemo(large);    // O(n) --> Linear Time


// ********************************************************** //
const findNemo2 = array => {
    array.forEach( (fish) => {
        if ( fish === 'Nemo') {
            console.log('Found Nemo!!');
        }
    });
}



// ********************************************************** //
const findNemo3 = array => {
    for (let fish of array) {
        if ( fish === 'nemo') {
            console.log('Found Nemo!!');
        }
    };
}

findNemo3(everyone);