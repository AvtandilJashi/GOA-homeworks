#2)დავალება

while True: 
    guess_number = 20
    enter = int(input("Enter number 1-100: "))
    if enter != guess_number:
        print("nah")
    else:
        print("yes")
        break









#3) დავალება

for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)



#4) დავალება

exam = int(input('Enter your score: '))

if exam < 70:
    print('You cannot pass exam')

else: 
    print('Congruations,you pass exam')


    
    
    
    
    
    
    finally_exam = int(input('Enter your score: '))

if finally_exam < 70:
    print('You cannot pass exam')

else: 
    print('Congruations,you pass exam')









project_score = int(input('Enter your score: '))

if project_score < 70:
    print('You cannot pass exam')

else: 
    print('Congruations,you pass exam')



#5) დავალება

age = int(input("Enter your age: "))

driving_experience = int(input("Enter your experience: "))


if age <= 0 and driving_experience < 0:
    print("")


if age >= 18:
    if driving_experience >= 1:
        print("You are eligeble to get driving license")
    else:
        print("You eligeble to get driving license")
else:
     print("You are not eligeble to take driving license") 

 