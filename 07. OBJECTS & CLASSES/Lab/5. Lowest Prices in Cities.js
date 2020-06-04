function lowestPrice(arr) {

    const regex = /\s*\|\s*/gm;

    let data = {};

    for (let i = 0; i < arr.length; i++) {

        let currentData = arr[i].split(regex);

        if (data[currentData[1]] === undefined) {
            data[currentData[1]] = currentData[2];
        } else {
            for (const curr of Object.keys(data)) {
                if (curr === currentData[1]) {
                    if (data[curr] >= currentData[2]) {
                        data[curr] = currentData[2];
                    }
                }
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currentData = arr[i].split(regex);

        for (const curr of Object.keys(data)) {
            if (curr === currentData[1]) {
                console.log(data);
            }
        }
    }
}


//lowestPrice(['Sample Town | Sample Product | 1000',
//    'Sample Town | Orange | 2',
//    'Sample Town | Peach | 1',
//    'Sofia | Orange | 3',
//    'Sofia | Peach | 2',
//    'New York | Sample Product | 1000.1',
//    'New York | Burger | 10']
//);