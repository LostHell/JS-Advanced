function nThElements(arr = []) {

    let length = arr.pop();

    for (let i = 0; i < arr.length; i += +length) {
        console.log(arr[i]);
    }
}


// nThElements(['5', '20', '31', '4', '20', '2']);
// nThElements(['dsa', 'asd', 'test', 'tset', '2']);
// nThElements(['1', '2', '3', '4', '5', '6']);