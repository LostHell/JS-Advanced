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