#Slicing and List Comprehensions

numbers = list(range(1, 11))

first_half = numbers[:5]

second_half = numbers[5:]

squares = [x**2 for x in numbers]

print("First half:", first_half)
print("Second half:", second_half)
print("Squares:", squares)



#List Manipulation and Aggregation

temperatures = [72, 68, 75, 70, 78, 74, 71]

highest_temp = max(temperatures)
print("Highest temperature:", highest_temp)

lowest_temp = min(temperatures)
print("Lowest temperature:", lowest_temp)

average_temp = sum(temperatures) / len(temperatures)
print("Average temperature:", average_temp)

above_70 = [temp for temp in temperatures if temp > 70]

print("Temperatures above 70 degree")
