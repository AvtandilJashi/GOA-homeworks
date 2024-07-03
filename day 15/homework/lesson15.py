#1)
first_person = int(input('Enter number: '))
print(first_person < 1000)



#2)
second_person = int(input('Enter quantity: '))
price = int(input('Enter price: '))
print(second_person * price)



#3)
height = int(input(" Enter Your Height: "))
weight = int(input(" Enter Your Weight: "))

height_metres = height / 100.0

bmi = weight / (height ** 2)

if bmi <18.5:
    bmi_category = "underweight"

elif bmi < 25:
    bmi_category = "Normal weight"

elif bmi < 30:
    bmi_category = "Overweight"

else:
    bmi_category = "Obesity"

print(f"Your BMI is: {bmi:.2f}")
print(f"You are classified as: {bmi_category}")





print(2 > 4)
print(4 > 2)
print(6 > 3)
print(3 > 6)
print(4 == 4)
print(6 < 40)
print(90 > 100)
print(780 > 2)
print(765 > 657)
print(200 == 200)




user_input1 = int(input("enter your age: "))
if user_input1 < 60:
    print('You can use discount')
else: 
    print("You can use discount: ")
user_input2 = int(input("enter your price: "))
if user_input2 > 100:
    print("You can use big discount: ")
else:
    print("You can use a normal discount: ")




user_input3 = int(input("enter your gpa"))
if user_input3 < 3.0:
    print("You can get a sertipicate: ")
else:
    print("You can't get your sertipicate: ")
user_input4 = int(input("enter your incomo: "))
if user_input4 < 50000:
    print("You can get the highest sertipacte: ")
else: 
    print("You can't get the highest sertipacte: ")



#4)
str = "Gamarjoba"
int = 9
float = 8,8
print(type(float))



