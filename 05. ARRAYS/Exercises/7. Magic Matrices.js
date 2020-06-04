function magicMatrice(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentArr = arr[i];
        let currentSum = 0;

        for (let x = 0; x < currentArr.length; x++) {
            currentSum += currentArr[x];
        }

        if (i === 0) {
            sum = currentSum;
        }
        if (sum !== currentSum) {
            console.log(false);
            return;
        }
    }

    console.log(true)
}


// magicMatrice([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// magicMatrice([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// magicMatrice([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);