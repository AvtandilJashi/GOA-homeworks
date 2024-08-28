#1)BMI Caluclator

weight = int(input('Enter your weight: '))
height = int(input('Enter your height: '))

Bmi = weight / height

if Bmi < 18.5:
    print('Underweight')
elif Bmi > 18.5 and Bmi < 25:
    print('Normal')
elif Bmi > 25 and Bmi < 30:
    print('Overweight')
elif Bmi > 30:
    print('Obese')
else:
    print('Obese - 2x')



#2)Going Once, Going Twice, Sold!

max_bid = int(input('Enter max bid:'))

while True:
    bid = int(input('Enter bid: '))
    if bid > max_bid:
        print('This item is sold,that cost', bid)



#3)Countdown

import time

seconds = int(input('Enter seconds: '))

while seconds >= 0:
    print(seconds)
    time.sleep(0.1)
    seconds -= 1

print('Countdown is completed')