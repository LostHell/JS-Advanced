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