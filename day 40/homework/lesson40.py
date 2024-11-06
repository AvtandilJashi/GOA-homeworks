#Codewars 1
#Bumps in the Road


def bumps(road):
    bump_count = road.count('n')
    
    if bump_count <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"



#Codewars 2
#Greet Me

def greet(name): 
    greetin = f'Hello {name.capitalize()}!'
    return greetin



#Codewars 3
#Sum even numbers

def sum_even_numbers(seq): 
    total_sum = 0
    
    for num in seq:
        if isinstance(num, int) and num % 2 == 0:
            total_sum += num 
    return total_sum



#Codewars 4
#esreveR





#Codewars 5
#Averages of numbers

def averages(arr):
    if arr is None or len(arr) < 2:  
        return []  
    
    result = []
    for i in range(len(arr) - 1):
        avg = (arr[i] + arr[i + 1]) / 2
        result.append(avg)
    return result



#Codewars 6
#16+18=214





#Codewars 7
#Last Survivor

def last_survivor(letters, coords): 
    letters = list(letters)
    for pos in coords:
        letters.pop(pos)
    return letters[0]



#Codewars 8
#nitialize my name

def initialize_names(name):
    name_parts = name.split()
    if len(name_parts) > 2:
        first_name = name_parts[0]
        last_name = name_parts[-1]
        middle_names = [f"{middle[0]}." for middle in name_parts[1:-1]]
        return " ".join([first_name] + middle_names + [last_name])
    else:
        return name



#Codewars 9
#Credit card issuer checking

def get_issuer(number):
    number_str = str(number)
    
    if len(number_str) == 15 and (number_str.startswith("34") or number_str.startswith("37")):
        return "AMEX"
    elif len(number_str) == 16 and number_str.startswith("6011"):
        return "Discover"
    elif len(number_str) == 16 and 51 <= int(number_str[:2]) <= 55:
        return "Mastercard"
    elif len(number_str) in [13, 16] and number_str.startswith("4"):
        return "VISA"
    else:
        return "Unknown"
    


#Codewars 10
#Even or Odd - Which is Greater?

def even_or_odd(s):
    even_sum = sum(int(digit) for digit in s if int(digit) % 2 == 0)
    odd_sum = sum(int(digit) for digit in s if int(digit) % 2 != 0)
    
    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"


