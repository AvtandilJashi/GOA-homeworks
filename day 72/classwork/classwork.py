#Codewars 1
#Fake Binary

def fake_bin(x):
    result = ""
    for digit in x:
        if int(digit) >= 5:
            result += '1'
        else:
            result += '0'
    return result



#Codewars 2
#Beginner - Reduce but Grow

def grow(arr):
    result = 1
    for num in arr:
        result *= num
    return result



#Codewars 3
#Unfinished Loop - Bug Fixing #1

def create_array(n):
    res=[]
    i=1
    while i<=n: res+=[i]
    return res



#Codewars 4
#Switch it Up!

def switch_it_up(number):
    words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    return words[number]



#Codewars 5
#Even numbers in an array

def even_numbers(arr,n):
    even_numbers = [i for i in arr if i % 2 == 0]
    return even_numbers[-n:]



