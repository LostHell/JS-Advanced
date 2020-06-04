function biggest(arr) {

    let firstDigit = 0;

    for (let i = 0; i < arr.length; i++) {

        if (firstDigit <= arr[i]) {
            firstDigit = arr[i];
            console.log(firstDigit);
        }
    }
}


// biggest([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// biggest([1, 2, 3, 4]);
// biggest([20, 3, 2, 15, 6, 1]);