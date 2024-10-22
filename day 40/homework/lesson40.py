#1) Codewars Answer

def bumps(road):
    bump_count = road.count('n')
    
    if bump_count <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"




#2)Codewars Answer
def greet(name): 
    greetin = f'Hello {name.capitalize()}!'
    return greetin



#3) Codewars Answer

def sum_even_numbers(seq): 
    total_sum = 0
    
    for num in seq:
        if isinstance(num, int) and num % 2 == 0:
            total_sum += num 
    return total_sum



#4) Codewars Answer



