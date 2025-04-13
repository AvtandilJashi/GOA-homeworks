const students = [
    { name: "Alice", grade: 95 },
    { name: "Bob", grade: 88 },
    { name: "Charlie", grade: 70 },
    { name: "Daisy", grade: 64 },
    { name: "Ethan", grade: 91 }
  ];
  
  const allPassing = students.every(student => student.grade >= 70);
  const hasFailing = students.some(student => student.grade < 65);
  
  students.forEach(student => {
    console.log(`Student: ${student.name}`);
  });
  
  const honorRoll = [];
  students.forEach(student => {
    if (student.grade >= 90) {
      honorRoll.push(student.name);
    }
  });
  
  console.log(allPassing);
  console.log(hasFailing);
  console.log(honorRoll);
  