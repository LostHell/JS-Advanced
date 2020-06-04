function juice(arr) {

    const regex = /\s\=\>\s/gm;

    const data = {};

    for (const juice of arr) {

        let [name, milliliters] = juice.split(regex);

        if (!data.hasOwnProperty(name) && Number(milliliters) >= 1000) {
            data[name] = 0;
        }
    }

    for (const juice of arr) {
        let [name, milliliters] = juice.split(regex);

        if (data.hasOwnProperty(name)) {
            data[name] += Number(milliliters);
        }
    }

    for (const [key, value] of Object.entries(data)) {
        let quantity = value / 1000 - value % 1000 / 1000;
        console.log(`${key} => ${quantity}`)
    }
}

// juice(['Orange => 2000',
//     'Peach => 1432',
//    'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']
// );

// juice(['Kiwi => 234',
//     'Pear => 2345',
//     'Watermelon => 3456',
//     'Kiwi => 4567',
//    'Pear => 5678',
//     'Watermelon => 6789']
// );