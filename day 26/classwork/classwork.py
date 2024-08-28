#Module 1:
#1)

hour = 24
minute = 60
second = 60

print(hour * minute * second)



#2)

price = int(input('Enter price: '))

print('Price:87$ ')



#3)

print('Nickname:Master')
print('Score:99')



#4)

print('  *')
print(' ***')
print('*****')
print(' ***')
print('  *')



#Module 2:
#1)

country = input('Country: ')
capital = input('Capital: ')



#2) 

wins = input("Enter wins: ")
ties = input("Enter ties: ")

wins = float(wins)
ties = float(ties)


points_from_wins = wins * 1
points_from_ties = ties * 0.5

total_points = points_from_wins + points_from_ties

print(f"Total points earned: {total_points}")



#3)
 
balance = int(input('Enter balance: '))
withdraw = int(input('How much you withdraw: '))
new_balance = balance - withdraw

print('Your new balance: ',new_balance)



#Module 3:
#1)

age = int(input('Enter your age: '))

if age <= 19:
    print('Take your kindle!')
else:
    print('you cannot to take kindle!')



#2)

robot_color = input('Enter robot color: ')


if robot_color == 'red':
     print('go to box #1')
elif robot_color == 'green':
        print('go to box #2')
elif robot_color == 'black':
    print('go to box #3')
else:
    print('Unknow')



#3)

day = str(input("enter day :"))
hours = int(input("enter your time :"))
work0 = 10 #hour
work1 = 21 #hour
if work0 == 10:
    print("shop is open")
elif work1 == 21:
    print("open")
else:
    print("shop is closed")
    კვირის_დღეები = "we dont work"
    if კვირის_დღეები == "we dont work":
        print("shop is closed")



#Module 4:
#1)

list = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X", "Y", "Z"]
print(list[0])
print(list[1])
print(list[2])



#2)

command = input('Enter command: ')

supported = ['lights off', 'lock the door', 'open the door', 'coffe', 'Shut down']

if command in supported:
     print('OK')
else:
     print('Unknown')



#3)

floor_num = int(input('Enter the total number of all floor: '))\

for floor in range(5, floor_num + 1, 5):
     print(floor)



#Code Project
#1)

miles = int(input('Enter miles to cover: '))
avg_speed = int(input('Enter average speed: '))

time = miles // avg_speed



#2) 

bill = int(input('Enter bill amount: '))

tip = bill * 20 / 100

print('your tip is' , tip)