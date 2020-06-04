function sequnce(n, k) {
    let data = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            data.push(1);
        } else if (i - k < 0 && i !== 0) {
            let sum = 0;
            for (let x = 0; x < i; x++) {
                sum += data[x];
            }
            data.push(sum);
        } else {
            let sum = 0;
            for (let x = i - k; x < i; x++) {
                sum += data[x];
            }
            data.push(sum);
        }
    }

    console.log(data);
}

sequnce(6, 3);
sequnce(8, 2);