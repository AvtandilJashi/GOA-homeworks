#Codewars 1
#Beginner - Reduce but Grow

def grow(arr):
    result = 1
    for num in arr:
        result *= num
    return result



#Codewars 2
#Fake Binary

def fake_bin(x):
    result = ""
    for digit in x:
        if int(digit) >= 5:
            result += '1'
        else:
            result += '0'
    return result



#Codewars 3
#Is he gonna survive?

def hero(bullets, dragons):
    bullets_needed = dragons * 2
    if bullets >= bullets_needed:
        return True
    else:
        return False
    


#Codewars 4
#How good are you really?

def better_than_average(class_points, your_points):
    average = (sum(class_points) + your_points) / (len(class_points) + 1)
    return your_points > average




