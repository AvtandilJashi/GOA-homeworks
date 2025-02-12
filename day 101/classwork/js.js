//1)

let academy = {
    name: 'GOA',
    courses: 'Game Development',
    socialLinks: 'Goal Orianted Academy',
    reviews: {
        user1: 'Perfect',
        user2: 'Perfect',
        user3: 'Perfect',
    },
    user1: {
        name: 'Avtandil',
        status: 'Student',
        review: 'Best academy in the world'
    },
    user2: {
        name: 'Luka',
        status: 'Student',
        review: 'Best academy in the world'
    },
    user3: {
        name: 'Lamzira',
        status: 'Parent',
        review: 'Best academy in the world'
    }
}

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

let secondAcademy = {
    members: 1000000000000
}

console.log(secondAcademy);


Object.freeze(secondAcademy);

console.log(Object.isFrozen(secondAcademy));