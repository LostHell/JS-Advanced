function populationTowns(arr) {

    const regex = /\s*\<\-\>\s*/gm;

    let myData = {};

    for (let i = 0; i < arr.length; i++) {

        let data = arr[i].split(regex)

        myData[data[0]] = Number(data[1]);
    }

    let townJSON = JSON.stringify(myData);

    console.log(myData);
}


//populationTowns(['Sofia <-> 1200000',
//   'Montana <-> 20000',
//   'New York <-> 10000000',
//   'Washington <-> 2345000',
//    'Las Vegas <-> 1000000']
//);