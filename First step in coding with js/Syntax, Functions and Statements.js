// 1.	String Length

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

// 2.	Math Operations

function calculation(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }

    console.log(result);
}



// 3.	Sum of Numbers N…M
function sumOfNumbers(n, m) {
    let result = 0;
    let numberStart = Number(n);
    let numberEnd = Number(m);

    for (let i = numberStart; i <= numberEnd; i++) {
        result += i;
    }

    console.log(result);
}



// 4.	Largest Number

function largest(a, b, c) {
    let num1 = Number(a);
    let num2 = Number(b);
    let num3 = Number(c);

    if (num1 >= num2 && num1 > num3) {
        console.log(`The largest number is ${num1}.`);
    }
    else if (num2 > num3 && num2 > num1) {
        console.log(`The largest number is ${num2}.`);
    }
    else {
        console.log(`The largest number is ${num3}.`);
    }
}



// 5.	Circle Area

function area(input) {
    if (input === Number(input)) {
        let areaCircle = Math.pow(input, 2) * Math.PI;
        console.log(areaCircle.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (input)}.`)
    }
}


// 6.	Square of Stars

function square(input) {
    let number = Number(input);

    for (let i = 0; i < number; i++) {

        let linePrint = String.apply();

        for (let x = 0; x < number; x++) {
            linePrint += '* '.toString();
        }

        console.log(linePrint);
    }
}



// 7.	Day of Week

function dayOfWeek(input) {

    let result;

    switch (input) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default: result = 'error'; break;
    }

    console.log(result)
}




// 8.	Aggregate Elements

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

