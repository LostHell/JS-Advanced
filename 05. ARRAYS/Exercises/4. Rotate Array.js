function rotateArr(arr) {

    let num = arr.pop();

    const rotations = num %= arr.length;

    for (let i = 0; i < rotations; i++) {
        let lastDigit = arr.pop();
        arr.unshift(lastDigit);
    }

    console.log(arr.join(' ').toString());
}

// rotateArr(['1', '2', '3', '4', '2']);
// rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])