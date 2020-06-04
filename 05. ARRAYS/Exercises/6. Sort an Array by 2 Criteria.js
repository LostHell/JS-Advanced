function sortArr(arr) {
    arr.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
    });
    console.log(arr.join('\n'));
}


// sortArr(['alpha', 'beta', 'gamma']);
// sortArr(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// sortArr(['test', 'Deny', 'omen', 'Default']);