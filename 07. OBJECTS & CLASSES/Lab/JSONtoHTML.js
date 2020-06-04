function JSONtoHTML(jsonString) {

    let result = '<table>';

    const arr = JSON.parse(jsonString);
    const titles = new Set(arr.map(x => Object.keys(x)).flat());
    const titlesArr = Array.from(titles);

    result += '<tr><th>' + titlesArr.join('</th><th>') + '</th></tr>';

    result += arr.reduce((acc, curr) => {
        let innerResult = titlesArr.reduce((titleAcc, titleCurr) => {
            let value = curr[titleCurr];
            value = value === undefined ? '' : value.toString();

            return titleAcc + '<td>' + value + '</td>';
        }, '');
        if (innerResult === '') {
            return acc;
        }
        acc + '<tr>' + innerResult + '</tr>';
    });

    return result + '</table>'
}

// console.log(JSONtoHTML('[{"Name": "Tomatoe & Chips", "Price": 2.35},' +
//    '{"Name": "J&B Chocolate", "Price": 0.96}]'));