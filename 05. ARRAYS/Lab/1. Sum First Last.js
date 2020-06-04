function sum(arr) {
    let firsDigit = Number(arr[0]);
    let lastDigit = Number(arr[arr.length-1]);

    console.log(firsDigit+lastDigit);
}

sum(['20', '30', '40']);
sum(['5', '10']);