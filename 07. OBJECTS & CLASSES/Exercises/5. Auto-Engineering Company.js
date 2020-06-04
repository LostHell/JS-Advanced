function auto(arr) {

    const regex = /\s\|\s/gm;

    let autos = {};

    for (let i = 0; i < arr.length; i++) {

        let [make, model, producedCars] = arr[i].split(regex);

        if (!autos.hasOwnProperty(make)) {
            autos[make] = {};
        }

        if (!autos[make].hasOwnProperty(model)) {
            autos[make][model] = Number(producedCars);
        } else {
            autos[make][model] += Number(producedCars);
        }
    }

    for (const auto of Object.keys(autos)) {

        console.log(auto);

        for (const model of Object.keys(autos[auto])) {
            console.log(`###${model} -> ${autos[auto][model]}`);
        }
    }
}


// auto(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10']
// );