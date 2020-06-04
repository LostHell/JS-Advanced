function sumTown(arr) {

    let town = {};

    for (let i = 0; i < arr.length; i += 2) {
        if (town[arr[i]] === undefined) {
            town[arr[i]] = Number(arr[i + 1]);
        } else {
            town[arr[i]] += Number(arr[i + 1]);
        }
    }

    let townsJSON = JSON.stringify(town);

    console.log(townsJSON);
}

// sumTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);