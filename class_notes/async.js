// asynchronous programming - code that runs in the background and doesn't block the main thread
// async javascript allows us to perform tasks that take time to complete, such as fetching data from an API, without freezing the user interface
// promises - an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// a promise can be in one of three states: pending, fulfilled, or rejected

// syncronous code - code that runs in a sequence, one line at a time, and each line must wait for the previous line to finish before it can run
function myDisplayer(some) {
    console.log(some);
}

function myFirst() {
    //   myDisplayer("Hello");
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

function mySecond() {
    // myDisplayer("Goodbye");
    for (let i = 20; i <= 30; i++) {
        console.log(i);
    }
}

// myFirst();
// mySecond();

// asynchronous 
// using setTimeout()
setTimeout(function() {
myFirst();
}, 1000);

mySecond();