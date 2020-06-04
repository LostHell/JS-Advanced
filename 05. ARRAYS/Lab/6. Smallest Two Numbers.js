function smallestElements(arr) {
    const data = arr.sort((a, b) => a - b);

    console.log(`${data[0]} ${data[1]}`)
}

smallestElements([30, 15, 50, 5]);
smallestElements([3, 0, 10, 4, 7, 3]);