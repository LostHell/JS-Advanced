// Fruit
function fruit(fruits, grams, price) {
    return `I need $${((grams / 1000) * price).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruits}.`
}

console.log(fruit(`orange`, 2500, 1.80));

// Greatest Common Divisor - GCD
function gcd(a, b) {
    let copyA = a;
    let copyB = b;

    while (copyB !== 0) {
        let result = copyA % copyB;
        copyA = copyB;
        copyB = result;
    }

    return copyA;
}

console.log(gcd(10, 5))

// Same Numbers
function sameNumbers(input) {
    let number = input.toString().split('');
    let sum = 0;
    let isValid = true;

    for (let i = 0; i < number.length; i++) {
        sum += +number[i];
        if (number[0] !== number[i]) {
            isValid = false;
        }
    }
    console.log(isValid);
    console.log(sum)
}

sameNumbers(2222222);

// Time to Walk
function walk(steps, footprint, speed) {
    let length = (steps * footprint);
    let totalRestTime = Math.floor(length / 500);//2400 , 4.8
    let totalTime = length / speed / 1000 * 60;
    let totalTimeInSeconds = (totalRestTime + totalTime) * 60;

    let result = new Date(null, null, null, null, null, totalTimeInSeconds).toTimeString().split(' ')[0];

    return result;
}

console.log(walk(4000, 0.60, 5));


// Calorie Object