function aggregate(arr = []) {

    let sum = 0;
    let sumOfInverseValue = 0;
    let digitsAsString = String.apply();
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
        sumOfInverseValue += +(1 / arr[i]);
        digitsAsString += arr[i];
    }

    console.log(sum);
    console.log(sumOfInverseValue);
    console.log(digitsAsString);
}