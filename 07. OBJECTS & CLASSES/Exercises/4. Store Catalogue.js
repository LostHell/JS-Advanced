function solve(arr) {
    const catalog = {};

    for (const arrElement of arr) {
        const [product, price] = arrElement.split(' : ');

        const letter = product[0];

        if (!catalog.hasOwnProperty(letter)) {
            catalog[letter] = {};
        }

        catalog[letter][product] = Number(price);
    }

    const sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (const key of sortedKeys) {

        console.log(key);
        const sortedProducts = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));

        for (const product of sortedProducts) {
            console.log(`  ${product}: ${catalog[key][product]}`);
        }
    }
}


// solve(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']
// );