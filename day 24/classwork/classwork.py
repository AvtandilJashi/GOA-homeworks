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
