function element(arr = []) {

    let sum = new Array();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            sum.push(i + 1);
        } else if (arr[i] == 'remove') {
            sum.pop(sum.length - 1);
        }
    }

    if (sum.length != 0) {
        for (let i = 0; i < sum.length; i++) {
            console.log(sum[i]);
        }
    } else {
        console.log('Empty');
    }
}


// element(['add', 'add', 'add', 'add']);
// element(['add', 'add', 'remove', 'add', 'add']);
// element(['remove', 'remove', 'remove']);