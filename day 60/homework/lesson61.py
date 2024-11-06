#Codewars 1
#Reversed sequence

def reverse_seq(n):
    return list(range(n, 0, -1))



#Codewars 2
#Beginner - Reduce but Grow

def grow(arr):
    result = 1
    for num in arr:
        result *= num
    return result



#Codewars 3
#Counting sheep...

def count_sheeps(sheeps):
    return sum(1 for s in sheeps if s is True)



#Codewars 4
#Isograms

def is_isogram(s):
    s = s.lower()  
    return len(s) == len(set(s)) 



#Codewars 5
#Training on Get the Middle Character

def get_middle(s):
    length = len(s)
    if length % 2 == 0:
        return s[length // 2 - 1 : length // 2 + 1] 
    else:
        return s[length // 2]  