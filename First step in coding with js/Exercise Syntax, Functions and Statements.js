// 1.	Fruit

function fruit(fruits, weight, money) {
    let weigthFruits = Number(weight) / 1000;
    let moneyFruit = Number(money);

    console.log(`I need $${(moneyFruit * weigthFruits).toFixed(2)} to buy ${weigthFruits.toFixed(2)} kilograms ${fruits}.`)
}


// 2.	Greatest Common Divisor - GCD

function GCD(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while (y) {
        let z = y;
        y = x % y;
        x = z;
    }

    console.log(x);
}


// 3.	Same Numbers

function sameNumber(number) {

    let isSameNumber = true;
    let sum = 0;
    let arr = number.toString().split('');

    for (let i = 0; i < arr.length; i++) {

        if (arr[0] != arr[i]) {
            isSameNumber = false;
        }

        sum += +arr[i];
    }

    console.log(isSameNumber);
    console.log(sum);
}


// 4.	Time to Walk
function walk(steps, footprint, speed) {
    let length = (steps * footprint);
    let totalRestTime = Math.floor(length / 500);//2400 , 4.8
    let totalTime = length / speed / 1000 * 60;
    let totalTimeInSeconds = (totalRestTime + totalTime) * 60;

    let result = new Date(null, null, null, null, null, totalTimeInSeconds + 1).toTimeString().split(' ')[0];

    console.log(result);
}


// 5.	Road Radar
function radar(arr = []) {
    let kmh = arr[0];
    let road = arr[1];

    if (road == 'residential') {
        if (kmh > 20 && kmh <= 40) {
            console.log('speeding');
        } else if (kmh > 40 && kmh <= 60) {
            console.log('excessive speeding');
        } else if (kmh > 60) {
            console.log('reckless driving');
        }
    } else if (road == 'city') {
        if (kmh > 50 && kmh <= 70) {
            console.log('speeding');
        } else if (kmh > 70 && kmh <= 90) {
            console.log('excessive speeding');
        } else if (kmh > 90) {
            console.log('reckless driving');
        }
    } else if (road == 'interstate') {
        if (kmh > 90 && kmh <= 110) {
            console.log('speeding');
        } else if (kmh > 110 && kmh <= 130) {
            console.log('excessive speeding');
        } else if (kmh > 130) {
            console.log('reckless driving');
        }
    } else if (road == 'motorway') {
        if (kmh > 130 && kmh <= 150) {
            console.log('speeding');
        } else if (kmh > 150 && kmh <= 170) {
            console.log('excessive speeding');
        } else if (kmh > 170) {
            console.log('reckless driving');
        }
    }
}


// 6.	Cooking by Numbers
function cooking(arr = []) {
    let number = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == 'chop') {
            number /= 2;
            console.log(number);
        } else if (arr[i] == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (arr[i] == 'spice') {
            number += 1;
            console.log(number);
        } else if (arr[i] == 'bake') {
            number *= 3;
            console.log(number);
        } else if (arr[i] == 'fillet') {
            number *= 0.80;
            console.log(number);
        }
    }
}


// 7.	Validity Checker
function checker(arr) {
    let x1 = arr[0];
    let x2 = arr[1];
    let y1 = arr[2];
    let y2 = arr[3];

    if (x1 === 0 || x2 === 0) {
        console.log(`{${x1}, ${x2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${x2}} to {0, 0} is invalid`)
    }

    if (y1 === 0 || y2 === 0) {
        console.log(`{${y1}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${y1}, ${y2}} to {0, 0} is invalid`)
    }

    if (x1 === y1 || x1 === y2 || x2 === y1 || x2 === y2) {
        console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is valid`)
    }
    else {
        console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is invalid`)
    }
}


checker([3, 0, 0, 4]);
checker([2, 1, 1, 1]);


// 8.	* Calorie Object
function calorie(arr = []) {
    let string = String.apply();

    for (let i = 0; i < arr.length; i += 2) {
        if (i == arr.length - 2) {
            string += arr[i] + ': ' + arr[i + 1] + ' }';
            break;
        }

        if (i == 0) {
            string += '{ ' + arr[i] + ': ' + arr[i + 1] + ', ';
        } else {
            string += arr[i] + ': ' + arr[i + 1] + ', ';
        }

    }

    console.log(string);
}

// calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);