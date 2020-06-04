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
    } else {
        console.log(`{${x1}, ${x2}} to {${y1}, ${y2}} is invalid`)
    }
}