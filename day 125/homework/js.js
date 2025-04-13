const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  const userWithId3 = users.find(user => user.id === 3);
  console.log(userWithId3);
  
  const colors = ["red", "green", "blue"];
  colors.reverse();
  console.log(colors);

  const productPrices = [19.99, 5.99, 100, 25, 49.5];
  productPrices.sort((a, b) => b - a);
  console.log(productPrices);

  const sampleString = "JavaScript";
  const characters = Array.from(sampleString);
  console.log(characters);
  
  const data1 = [1, 2, 3];
  const data2 = "hello";
  const isData1Array = Array.isArray(data1);
  const isData2Array = Array.isArray(data2);
  console.log(isData1Array);
  console.log(isData2Array);
  
  const studentNamesString = "Alice,Bob,Charlie,David";
  const courses = [
    {
      id: "CS101",
      name: "Intro to Computer Science",
      students: [
        { name: "Alice", grades: [80, 90] },
        { name: "Bob", grades: [70, 60] }
      ],
      capacity: 35,
      isActive: true,
      credits: 3
    },
    {
      id: "MA201",
      name: "Calculus II",
      students: [
        { name: "Charlie", grades: [95, 85] },
        { name: "David", grades: [88, 92] }
      ],
      capacity: 25,
      isActive: true,
      credits: 4
    },
    {
      id: "PH301",
      name: "Modern Physics",
      students: [
        { name: "Eve", grades: [65, 55] },
        { name: "Frank", grades: [70, 75] }
      ],
      capacity: 40,
      isActive: false,
      credits: 3
    }
  ];
  
  const isCoursesArray = Array.isArray(courses);
  const isStudentNamesArray = Array.isArray(studentNamesString);
  console.log(isCoursesArray);
  console.log(isStudentNamesArray);
  
  const allStudentNames = Array.from(studentNamesString.split(","));
  console.log(allStudentNames);
  
  courses.forEach(course => {
    console.log(`Course ID: ${course.id}, Name: ${course.name}`);
  });
  
  const courseNames = courses.map(course => course.name);
  console.log(courseNames);
  
  const courseAverages = courses.map(course => {
    const allGrades = course.students.flatMap(s => s.grades);
    const average = allGrades.reduce((a, b) => a + b, 0) / allGrades.length;
    return { id: course.id, average };
  });
  console.log(courseAverages);
  
  const activeCourses = courses.filter(course => course.isActive);
  console.log(activeCourses);
  
  const calculusCourse = courses.find(course => course.id === "MA201");
  console.log(calculusCourse);
  
  courses.forEach(course => {
    const allPassed = course.students.every(student =>
      student.grades.some(grade => grade >= 70)
    );
    console.log(`Course ${course.id} has all students with a passing grade: ${allPassed}`);
  });
  
  const hasSmallCapacity = courses.some(course => course.capacity < 30);
  console.log(hasSmallCapacity);
  
  const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
  console.log(coursesByCapacity);
  
  coursesByCapacity.reverse();
  console.log(coursesByCapacity);
  
  const totalCredits = courses
    .filter(course => course.isActive)
    .reduce((sum, course) => sum + course.credits, 0);
  console.log(totalCredits);
  
  const activeCourseNamesReversed = activeCourses
    .reduceRight((acc, course, index) => {
      return acc ? `${acc} - ${course.name}` : course.name;
    }, "");
  console.log(activeCourseNamesReversed);
  