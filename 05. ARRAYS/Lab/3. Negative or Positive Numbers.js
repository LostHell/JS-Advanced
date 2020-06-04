function numbers(arr) {
    let sortedDigit = arr.sort((a, b) => a - b);
    let data = [];

    for (let i = 0; i < sortedDigit.length; i++) {
        if (sortedDigit[i] !== 0) {
            data.push(sortedDigit[i]);
        }
    }

    if (sortedDigit.includes(0)) {
        data.push(0);
    }
    
    console.log(data.join('\n'));
}

numbers([7, -2, 8, 9]);
numbers([3, -2, 0, -1]);