class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduction() {
        return `Hi, my name is ${this.name} and I'm ${this.age}.`;
    }
}

let john = new Person("John", 25);
console.log(john.introduction());



class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    makeSound() {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    makeSound() {
        return "bark!";
    }
}

let d = new Dog("Rex");
d.name = "Bob";
console.log(d.name);
console.log(d.makeSound());


class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Shape is abstract and cannot be instantiated directly.");
        }
    }

    getSurface() {
        throw new Error("getSurface() must be implemented in subclasses.");
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }

    getSurface() {
        return Math.PI * this.r * this.r;
    }
}

class Square extends Shape {
    constructor(l) {
        super();
        this.l = l;
    }

    getSurface() {
        return this.l * this.l;
    }
}

let c = new Circle(5);
console.log("Surface du cercle :", c.getSurface());

let s = new Square(4);
console.log("Surface du carré :", s.getSurface());