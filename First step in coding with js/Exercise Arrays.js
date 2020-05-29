const someArray = [1, 2, 3, 4];

function addElement(arr, element) {
    arr.push(element);
}

addElement(someArray, 5);
// someArray.push(5);


//Spred
//const arr = [1, 2, 3, 4];

//let testArr = [...arr, 5, 6];

//let testArr2 = [...arr];


// 1.	Print an Array with a Given Delimiter

function stringSeparator(arr) {
    let string = '';

    for (let i = 0; i < arr.length - 1; i++) {
        if (i == arr.length - 2) {
            string += arr[i];
            break;
        }
        string += arr[i] + arr[arr.length - 1];
    }

    console.log(string);
}

// stringSeparator(['One', 'Two', 'Three', 'Four', 'Five', '-']);
// stringSeparator(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);


// 2.	Print Every N-th Element from an Array
function nThElements(arr = []) {

    let length = arr.pop();

    for (let i = 0; i < arr.length; i += +length) {
        console.log(arr[i]);
    }
}


// nThElements(['5', '20', '31', '4', '20', '2']);
// nThElements(['dsa', 'asd', 'test', 'tset', '2']);
// nThElements(['1', '2', '3', '4', '5', '6']);


// 3.	Add and Remove Elements
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


// 4.	Rotate Array
function rotateArr(arr) {

    let num = arr.pop();

    const rotations = num %= arr.length;

    for (let i = 0; i < rotations; i++) {
        let lastDigit = arr.pop();
        arr.unshift(lastDigit);
    }

    console.log(arr.join(' ').toString());
}

// rotateArr(['1', '2', '3', '4', '2']);
// rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])


// 5.	Extract Increasing Subsequence from Array
function biggest(arr) {

    let firstDigit = 0;

    for (let i = 0; i < arr.length; i++) {

        if (firstDigit <= arr[i]) {
            firstDigit = arr[i];
            console.log(firstDigit);
        }
    }
}


// biggest([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// biggest([1, 2, 3, 4]);
// biggest([20, 3, 2, 15, 6, 1]);


// 6.	Sort an Array by 2 Criteria
function sortArr(arr) {
    arr.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        }
        if (a.length > b.length) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
    });
    console.log(arr.join('\n'));
}


// sortArr(['alpha', 'beta', 'gamma']);
// sortArr(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// sortArr(['test', 'Deny', 'omen', 'Default']);


// 7.	Magic Matrices
function magicMatrice(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentArr = arr[i];
        let currentSum = 0;

        for (let x = 0; x < currentArr.length; x++) {
            currentSum += currentArr[x];
        }

        if (i === 0) {
            sum = currentSum;
        }
        if (sum !== currentSum) {
            console.log(false);
            return;
        }
    }

    console.log(true)
}


// magicMatrice([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// magicMatrice([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
// magicMatrice([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);



// 8.	*Tic-Tac-Toe
