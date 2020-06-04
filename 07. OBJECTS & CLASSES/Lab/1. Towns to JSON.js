function town(arr) {
    const regex = /\s*\|+\s*/gm;

    let col = arr[0].split(regex).filter(function (e) {
        return e !== '';
    });

    let data = [];

    for (let i = 1; i < arr.length; i++) {
        let result = arr[i].split(regex).filter((item) => {
            return item !== '';
        });

        let currentRow = {};
        currentRow[`${col[0]}`] = result[0];
        currentRow[`${col[1]}`] = Number(Number(result[1]).toFixed(2));
        currentRow[`${col[2]}`] = Number(Number(result[2]).toFixed(2));

        data.push(currentRow);
    }

    let newJSON = JSON.stringify(data);

    console.log(newJSON);
}

//town(['| Town | Latitude | Longitude |',
//    '| Sofia | 42.696552 | 23.32601 |',
//    '| Beijing | 39.913818 | 116.363625 |']
//);