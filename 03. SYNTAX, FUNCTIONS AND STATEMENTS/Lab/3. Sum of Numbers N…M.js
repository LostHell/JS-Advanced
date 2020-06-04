function sumOfNumbers(n, m) {
    let result = 0;
    let numberStart = Number(n);
    let numberEnd = Number(m);

    for (let i = numberStart; i <= numberEnd; i++) {
        result += i;
    }

    console.log(result);
}