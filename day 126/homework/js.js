const person1 = {
    getName() {
        return this.name;
    }
};

const name = "გიორგი";
const age = 30;

const person2 = { name, age };

const key = "age";
const person3 = {
    [key]: 30
};

const user1 = {
    greet(name) {
        return `Hello, ${name}`;
    }
};

const user2 = {
    age: 30,
    get age() {
        return this.age;
    },
    set age(newAge) {
        this.age = newAge;
    }
};
