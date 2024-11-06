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