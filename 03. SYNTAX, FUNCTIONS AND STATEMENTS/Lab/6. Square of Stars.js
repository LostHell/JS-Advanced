function square(input) {
    let number = Number(input);

    for (let i = 0; i < number; i++) {

        let linePrint = String.apply();

        for (let x = 0; x < number; x++) {
            linePrint += '* '.toString();
        }

        console.log(linePrint);
    }
}