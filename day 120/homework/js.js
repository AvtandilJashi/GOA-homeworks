const person = {
    name: 'გიორგი',
    age: 30,
    city: 'თბილისი'
  };
  
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  const prices = {
    apple: 2.5,
    banana: 1.8,
    orange: 3.2,
    grape: 4.0
  };
  
  let totalPrice = 0;
  for (const key in prices) {
    totalPrice += prices[key];
  }
  console.log(`ჯამი: ${totalPrice}`);
  
  const mixedData = {
    name: 'თამარი',
    age: 25,
    isEmployed: true,
    salary: 3000,
    city: 'ქუთაისი'
  };
  
  for (const key in mixedData) {
    if (typeof mixedData[key] === 'number') {
      console.log(`${key}: ${mixedData[key]}`);
    }
  }
  
  const books = {
    'ბედი': 'გია გაბაშვილის',
    'მეგობრობა': 'ილია ჭავჭავაძე',
    'სიყვარული': 'ნოდარ დუმბაძე'
  };
  
  const bookTitles = [];
  for (const key in books) {
    bookTitles.push(key);
  }
  console.log(bookTitles);
  
  const numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  console.log(`ჯამი: ${sum}`);
  
  const str = 'გამარჯობა';
  for (const char of str) {
    console.log(char);
  }

  const strings = ['apple', 'banana', 'kiwi', 'grape', 'mango'];
  for (const str of strings) {
    if (str.length > 5) {
      console.log(str);
    }
  }

  const nums = [1, 2, 3, 4, 5];
  const squares = [];
  for (const num of nums) {
    squares.push(num ** 2);
  }
  console.log(squares);
  