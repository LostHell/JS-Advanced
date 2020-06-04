function solve() {
    //TODO...
    const text = document.getElementById('input');
    const outputSection = document.getElementById('output');

    const regex = /\.+\?*\!*\s/gm;
    const sentences = text.innerText.split(regex);
    let paragraphsCount = Math.ceil(sentences.length / 3);

    for (let i = 0; i < paragraphsCount; i++) {
        const paragraph = document.createElement('p');

        if (sentences.length >= 3) {
            let arr = [];
            for (let x = 0; x < 3; x++) {
                arr.push(sentences.shift());
            }

            paragraph.innerText = arr.join('. ') + '.';
            outputSection.appendChild(paragraph);
        } else {
            let arr = [];
            for (let x = 0; x < sentences.length; x++) {
                arr.push(sentences.shift());
            }

            paragraph.innerText = arr.join('. ');
            outputSection.appendChild(paragraph);
        }
    }
}