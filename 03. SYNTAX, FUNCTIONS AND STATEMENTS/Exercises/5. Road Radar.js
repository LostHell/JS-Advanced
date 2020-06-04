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