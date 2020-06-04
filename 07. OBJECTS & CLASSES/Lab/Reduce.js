function reduceFunc() {
    let arr = [1, 2, 3, 4, 5];
    let count = arr.reduce((acc, currentValue) => {
        console.log(acc, 'ACC');
        console.log(currentValue, 'CURRENT VALUE');
        return acc + currentValue;
    });
    console.log(count);
}