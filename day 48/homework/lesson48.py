#Codewars 1
#Reversed Strings

def solution(string):
    reversed_str = ''
    for char in string:
        reversed_str = char + reversed_str
    return reversed_str



#Codewars 2
#Mumbling

def accum(st):
    result = []
    for i in range(len(st)):
        result.append(st[i].upper() + st[i].lower() * i)
    return '-'.join(result)



#Codewars 3
#Beginner Series #1 School Paperwork

def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    else:
        return n * m
    


#Codewars 4
#Grasshopper - Array Mean

def find_average(nums):
    avg = 0
    for num in nums:
        avg += num
    return avg / len(nums)



#Codewars 5
#Triangular Treasure

def triangular(n):
    if n <= 0:
        return 0
    return n * (n + 1) // 2



#Codewars 6
#Will you make it?

def zero_fuel(distance_to_pump, mpg, fuel_left):
    max_distance = fuel_left * mpg
    return max_distance >= distance_to_pump



#Codewars 7
#Cat years, Dog years

def human_years_cat_years_dog_years(human_years):
    cat_years = 0
    dog_years = 0
    
    if human_years == 1:
        cat_years = 15
        dog_years = 15
    elif human_years == 2:
        cat_years = 15 + 9
        dog_years = 15 + 9
    else:
        cat_years = 15 + 9 + (human_years - 2) * 4
        dog_years = 15 + 9 + (human_years - 2) * 5
    
    return [human_years, cat_years, dog_years]