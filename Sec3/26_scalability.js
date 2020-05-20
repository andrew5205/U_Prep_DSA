
const nemo = ['nemo'];
// create a large array contains 1000 elements and fill in with 'nemo'
const large = new Array(1000).fill('nemo');

function findNemo(arr) {

    // check for runtime performance
    // initial time 
    let t0 = Date.now();
    // console.log(t0);


    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] === 'nemo') {
            console.log('Foound NEMO!');
        }
    }

    // end up time 
    let t1 = Date.now();
    // console.log(t1);
    console.log('Call to find Nemo took ' + (t1- t0) + ' millisec');
}

// findNemo(nemo);
findNemo(large);


