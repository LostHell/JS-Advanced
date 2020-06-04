function components(arr) {

    const regex = /\s\|\s/gm;

    const systemComponents = {};

    for (const element of arr) {
        let [name, site, page] = element.split(regex);

        if (!systemComponents.hasOwnProperty(name)) {
            systemComponents[name] = {};
        }
        if (!systemComponents[name].hasOwnProperty(site)) {
            systemComponents[name][site] = [];
        }

        systemComponents[name][site].push(page);
    }

    Object.entries(systemComponents).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length ||
            a[0].localeCompare(b[0]);
    }).forEach(([system, component]) => {
        console.log(system)
        Object.entries(component).sort((a, b) =>
            b[1].length - a[1].length)
            .forEach(([name, sub]) => {
                console.log('|||' + name);
                sub.forEach(s => {
                    console.log('||||||' + s)
                });
            });
    });
}


// components(['SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',
//     'SULS | Judge Site | Login Page',
//     'SULS | Judge Site | Submittion Page',
//     'Lambda | CoreA | A23',
//     'SULS | Digital Site | Login Page',
//     'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
//     'Lambda | CoreC | C4',
//     'Indice | Session | Default Storage',
//     'Indice | Session | Default Security']
// );