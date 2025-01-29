//1)

const book = {
    title: "ვეფხისტყაოსანი",
    author: "შოთა რუსთაველი",
    year: 1190,
    genre: "ეპოსი",
    price: 25.99
};

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.price);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["year"]);
console.log(book["genre"]);
console.log(book["price"]);

console.log(`წიგნის სახელია "${book.title}", ავტორი - ${book.author}. იგი გამოიცა ${book.year} წელს, მისი ჟანრი ${book.genre}-ია და ღირს ${book.price} ლარი.`);



//2)

const student = {
    name: "ავთანდილ ჯაში",
    age: 21,
    faculty: "პროგრამირება",
    year: 3,
    gpa: 3.8
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.year);
console.log(student.gpa);

console.log(student["name"]);
console.log(student["age"]);
console.log(student["faculty"]);
console.log(student["year"]);
console.log(student["gpa"]);

console.log(`სტუდენტის სახელია ${student.name}, ის ${student.age} წლისაა და სწავლობს ${student.faculty}-ის ფაკულტეტზე. ამჟამად არის ${student.year}-ე კურსზე და მისი საშუალო ქულაა ${student.gpa}.`);
