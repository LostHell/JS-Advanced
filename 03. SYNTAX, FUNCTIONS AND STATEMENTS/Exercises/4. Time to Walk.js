function walk(steps, footprint, speed) {
    let length = (steps * footprint);
    let totalRestTime = Math.floor(length / 500);//2400 , 4.8
    let totalTime = length / speed / 1000 * 60;
    let totalTimeInSeconds = (totalRestTime + totalTime) * 60;

    let result = new Date(null, null, null, null, null, totalTimeInSeconds + 1).toTimeString().split(' ')[0];

    console.log(result);
}