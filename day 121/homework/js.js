const sum = (a, b = 0) => a + b;

const fullName = ({ firstName, lastName = "Doe" }) => `${firstName} ${lastName}`;

const arraySum = (arr = [1, 2, 3]) => arr.reduce((acc, curr) => acc + curr, 0);

const concatenate = (str1, str2 = "") => str1 + str2;

const executeFunction = (fn = () => 10) => fn();
