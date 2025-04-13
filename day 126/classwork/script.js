var oldUser = {
    name: "გიორგი",
    age: 30,
    getInfo: function() {
        return this.name + " არის " + this.age + " წლის.";
    }
};

const newUser = {
    name: "გიორგი",
    age: 30,
    get info() {
        return `${this.name} არის ${this.age} წლის.`;
    },
    updateAge(newAge) {
        this.age = newAge;
    }
};

//გაუმჯობესებები:
//1. გამოყენებულია const ნაცვლად var — რათა თავიდან ავიცილოთ ნებართვითი შეცვლები.
//2. გამოყენებულია template literal (`${}`) — კოდის უფრო გასაგებად და მოკლედ დასაწერად.
//3. დამატებულია getter — info ხდება თვისება, რომელიც ავტომატურად აბრუნებს ინფორმაციას.
//4. დამატებულია მეთოდი updateAge — უკეთესი მონაცემთა მართვისთვის.


