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



#პრობლემა: დაწერეთ პროგრამა, რომელიც ფილტრავს სტუდენტების ქულებს, ისე რომ დარჩეს მხოლოდ ისინი, ვისაც აქვს 50-ზე მეტი ქულა.

grades = list(float, input("Enter student grades separated by space: ").split())

filtered_grades = [grade for grade in grades if grade > 50]

print("Grades greater than 50:", filtered_grades)



#პრობლემა: დაწერეთ პროგრამა, რომელიც შებრუნებულად გამოიტანს მომხმარებლის მიერ შეყვანილ რიცხვების სიას.

numbers = list(int, input("Enter numbers separated by space: ").split())

reversed_numbers = numbers[::-1]

print("Reversed list:", reversed_numbers)



#პრობლემა: დაწერეთ პროგრამა, რომელიც გამოთვლის მომხმარებლის მიერ შეყვანილი რიცხვების სიის საშუალო მნიშვნელობას.

numbers = list(float, input("Enter numbers separated by space: ").split())

average = sum(numbers) / len(numbers)

print(f"Average value: {average}")

