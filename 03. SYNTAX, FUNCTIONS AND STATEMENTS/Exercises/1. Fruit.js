function fruit(fruits, weight, money) {
    let weigthFruits = Number(weight) / 1000;
    let moneyFruit = Number(money);

    console.log(`I need $${(moneyFruit * weigthFruits).toFixed(2)} to buy ${weigthFruits.toFixed(2)} kilograms ${fruits}.`)
}