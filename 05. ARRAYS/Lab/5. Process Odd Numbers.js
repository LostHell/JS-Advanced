function oddNumbers(arr) {
    let reverseData = [];

    for (let i = 1; i < arr.length; i += 2) {
        reverseData.push(arr[i] * 2);
    }
    reverseData.reverse();

    console.log(reverseData);
}

oddNumbers([10, 15, 20, 25]);
oddNumbers([3, 0, 10, 4, 7, 3]);