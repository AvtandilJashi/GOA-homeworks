const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Carol", email: "carol@example.com" }
  ];
  const formattedEmails = users.map(user => `<${user.email}>`);
  console.log("Formatted Emails:", formattedEmails);
  
  const nums = [1, 2, 3, 4, 5, 6];
  const squaredEvens = nums.filter(n => n % 2 === 0).map(n => n * n);
  console.log("Squared Evens:", squaredEvens);

  const items = [
    { name: "Pen", price: 2, quantity: 5 },
    { name: "Notebook", price: 10, quantity: 3 },
    { name: "Bag", price: 25, quantity: 1 }
  ];
  const totalValue = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log("Total Value:", totalValue);

  const words = ["this", "is", "a", "sentence"];
  const reversedSentence = words.reduceRight((acc, word) => acc + " " + word) + ".";
  console.log("Reversed Sentence:", reversedSentence);

  const studentData = [
    {
      id: 1,
      name: "Luka",
      grades: { Math: [90, 85], Science: [95], History: [88, 91] },
      attendance: [true, false, true, true, true],
      extracurricular: ["Basketball", "Debate Team"]
    },
    {
      id: 2,
      name: "Nino",
      grades: { Math: [65, 60], Science: [55, 68], History: [72] },
      attendance: [true, false, false, true],
      extracurricular: []
    },
    {
      id: 3,
      name: "Giorgi",
      grades: { Math: [100], Science: [100, 98], History: [100] },
      attendance: [true, true, true, true, true],
      extracurricular: ["Debate Team", "Chess Club"]
    }
  ];
  
  studentData.forEach(student => {
    console.log(`Hello, ${student.name}!`);
  });
  
  const studentNames = studentData.map(student => student.name);
  console.log("Student Names:", studentNames);
  
  const studentAverages = studentData.map(student => {
    const allScores = Object.values(student.grades).flat();
    const avg = allScores.reduce((a, b) => a + b, 0) / allScores.length;
    return { name: student.name, average: avg };
  });
  console.log("Student Averages:", studentAverages);
  
  const highPerformingStudents = studentAverages.filter(s => s.average >= 85).map(s => s.name);
  console.log("High Performing Students:", highPerformingStudents);
  
  const strugglingStudents = studentData.filter(student => {
    return Object.values(student.grades).some(scores => scores.every(score => score < 70));
  }).map(student => student.name);
  console.log("Struggling Students:", strugglingStudents);
  
  const totalExtracurriculars = studentData.reduce((sum, student) => sum + student.extracurricular.length, 0);
  console.log("Total Extracurriculars:", totalExtracurriculars);
  
  const subjectScores = studentData.reduce((acc, student) => {
    for (let subject in student.grades) {
      if (!acc[subject]) acc[subject] = [];
      acc[subject].push(...student.grades[subject]);
    }
    return acc;
  }, {});
  
  const subjectAverages = Object.entries(subjectScores).map(([subject, scores]) => {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return { subject, average: avg };
  });
  
  const highestAvgSubject = subjectAverages.reduce((max, subj) => subj.average > max.average ? subj : max);
  console.log("Top Subject:", highestAvgSubject.subject);
  
  const debateTeamNames = studentData.reduceRight((acc, student) => {
    if (student.extracurricular.includes("Debate Team")) {
      return acc ? `${acc} and ${student.name}` : student.name;
    }
    return acc;
  }, "");
  console.log("Debate Team Members:", debateTeamNames);
  
  const allHaveGoodAttendance = studentData.every(student => {
    const presentCount = student.attendance.filter(day => day).length;
    return presentCount / student.attendance.length >= 0.5;
  });
  console.log("All Have Good Attendance:", allHaveGoodAttendance);
  
  const hasInactiveStudent = studentData.some(student => student.extracurricular.length === 0);
  console.log("Has Inactive Student:", hasInactiveStudent);
  
  studentData.forEach(student => {
    for (let subject in student.grades) {
      student.grades[subject].forEach(score => {
        if (score === 100) {
          console.log(`Congratulations, ${student.name}, for achieving a perfect score in ${subject}!`);
        }
      });
    }
  });
  