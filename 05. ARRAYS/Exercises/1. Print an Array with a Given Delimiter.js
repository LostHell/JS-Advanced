function stringSeparator(arr) {
    let string = '';

    for (let i = 0; i < arr.length - 1; i++) {
        if (i == arr.length - 2) {
            string += arr[i];
            break;
        }
        string += arr[i] + arr[arr.length - 1];
    }

    console.log(string);
}

// stringSeparator(['One', 'Two', 'Three', 'Four', 'Five', '-']);
// stringSeparator(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);