// 1 Test with COMPARE
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.compare = function (p1, p2) {
    return p1.name === p2.name && p1.age === p2.age;
}

class Person2 {

    static compare(p1, p2) {
        return p1.name === p2.name && p1.age === p2.age;
    }

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


// 2 Test with GET AND SET
function createPerson(name, age) {

    const obj = {
        name, age,
        items: []
    };

    Object.defineProperty(obj, 'itemsCount', {
        // set(newItems) {
        //     _items = newItems;
        // },
        get() {
            // return _items;
            return obj.items.length;
        }
    })

    return obj;
}

// const ivan = createPerson('Ivan',28);
// ivan.items.push('item 1');
// console.log(ivan.itemsCount)