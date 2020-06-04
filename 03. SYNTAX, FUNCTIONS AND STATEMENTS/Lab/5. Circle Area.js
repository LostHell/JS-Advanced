function area(input) {
    if (input === Number(input)) {
        let areaCircle = Math.pow(input, 2) * Math.PI;
        console.log(areaCircle.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (input)}.`)
    }
}