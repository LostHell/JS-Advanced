function largest(a, b, c) {
    let num1 = Number(a);
    let num2 = Number(b);
    let num3 = Number(c);

    if (num1 >= num2 && num1 > num3) {
        console.log(`The largest number is ${num1}.`);
    } else if (num2 > num3 && num2 > num1) {
        console.log(`The largest number is ${num2}.`);
    } else {
        console.log(`The largest number is ${num3}.`);
    }
}