class Person {
    constructor(firstName, lastName, age, city, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
        this.email = email;
    }

    toString() {
        if (this.email !== undefined) {
            return `${this.firstName} ${this.lastName} from ${this.city} and ${this.age} years old. Email: ${this.email}`;
        }
        return `${this.firstName} ${this.lastName} from ${this.city} and ${this.age} years old.`;
    }
}


// console.log(new Person('Ivan', 'Petrov', 28, 'Smolyan', 'ivan.pertov@gmail.com').toString());
// console.log(new Person('Ivan', 'Petrov', 28, 'Smolyan').toString());