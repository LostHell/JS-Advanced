function table(arr) {

    const rows = [];

    for (const line of arr) {
        const person = JSON.parse(line);

        rows.push(`\t<tr>\n\t\t<td>${person.name}</td>\n\t\t<td>${person.position}</td>\n\t\t<td>${person.salary}</td>\n\t</tr>`)
    }
    console.log('<table>');
    console.log(rows.join('\n'));
    console.log('</table>');
}

// table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
//     '{"name":"Teo","position":"Lecturer","salary":1000}',
//     '{"name":"Georgi","position":"Lecturer","salary":1000}']
// );