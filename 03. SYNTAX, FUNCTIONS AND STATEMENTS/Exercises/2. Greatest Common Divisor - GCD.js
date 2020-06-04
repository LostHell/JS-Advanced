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