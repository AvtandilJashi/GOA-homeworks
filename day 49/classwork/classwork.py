#როექტის აღწერა: პრობლემა: დაწერეთ პროგრამა, რომელიც ითვლის სტუდენტების ნიშნებს და განსაზღვრავს საუკეთესო სტუდენტს. მომხმარებელი შეიყვანს სტუდენტების სახელებსა და მათ ნიშანს, პროგრამა კი გამოთვლის საშუალო ნიშანს თითოეული სტუდენტისთვის და გამოაცხადებს საუკეთესოს.

students = {}
num_students = int(input("Enter number of students: "))

for i in range(num_students):
    name = input("Enter student's name: ")
    grades = list(map(float, input(f"Enter {name}'s grades separated by space: ").split()))
    avg_grade = sum(grades) / len(grades)
    students[name] = avg_grade

best_student = max(students, key=students.get)
print(f"The best student is {best_student}")



#პრობლემა: შექმენით პროგრამა, რომელიც დაამუშავებს სტუდენტების ქულების სიას და მოიძებნის მაქსიმალურ, მინიმალურ და საშუალო ქულას.

grades = list(float, input("Enter student grades separated by space: ").split())

max_grade = max(grades)
min_grade = min(grades)
avg_grade = sum(grades) / len(grades)

print(f"Max grade: {max_grade}")
print(f"Min grade: {min_grade}")
print(f"Average grade: {avg_grade}")
