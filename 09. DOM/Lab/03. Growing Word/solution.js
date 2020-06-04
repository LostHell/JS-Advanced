function growingWord() {
    const element = document.getElementById('exercise').lastElementChild;

    element.style.fontSize = element.style.fontSize === '' ? `${2}px` : `${Number(element.style.fontSize.slice(0, element.style.fontSize.length - 2)) * 2}px`;
    switch (element.style.color) {
        case 'red':
            element.style.color = 'blue';
            break;
        case 'green':
            element.style.color = 'red';
            break;
        case 'blue':
            element.style.color = 'green';
            break;
        default:
            element.style.color = 'blue';
            break;
    }
}