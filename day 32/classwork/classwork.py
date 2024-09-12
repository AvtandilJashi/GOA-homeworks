#1)

def arithmetic_operations(x, y):
    return {
        '+': x + y,
        '-': x - y,
        '*': x * y,
        '//': x // y
    }


x = 10
y = 3
print(arithmetic_operations(x, y))



#2)

def greet_user(name):
    greeting = f'გამარჯობა {name}, კეთილი იყოს შენი მობრძანება, გისურვებ წარმატებას და წინ სვლას'
    print(greeting)

user_name = "Avtandil"
print(greet_user(user_name))


#3)

def love_letter(name):
    letter = f'ძვირფასო {name},მე შენ მიყვარხარ როგორც მაწონი'
    print(letter)

user_name = "მაშო"
print(love_letter(user_name))



#4) 

def generate_sentence(name, surname, age, country, city, hobby):
    sentence = (f"Hi my name is {name} {surname}, {age} years old. "
                f"i am living {country},  in{city} "
                f"My favourite hobby is {hobby}.")
    return sentence

name = "Avtandil"
surname = "Jashi"
age = 14
country = "Georgia"
city = "Tbilisi"
hobby = "Basketball"

print(generate_sentence(name, surname, age, country, city, hobby))



#5)

def calculate_area(length, width):
    area = length * width
    return area

length = 9
width = 8
print(f"The area of ​​a rectangle is: {calculate_area(length, width)}")



#6)

def find(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2

num1 = 15
num2 = 4
print(f"Max nhmber is: {find(num1, num2)}")



#7)

def checking(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

number = 9
print(f"number {number} is: {checking(number)}")


