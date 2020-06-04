function solve(arr1, arr2, arr3) {
    let sumLength;
    let averageLength;

    let firtArr = arr1.length;
    let secondArr = arr2.length;
    let thirdArr = arr3.length;

    sumLength = firtArr + secondArr + thirdArr;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}