#Codewars 1
#Is it even?

def is_even(n): 
    if not isinstance(n, int):
        return False
    return n % 2 == 0



#Codewars 2
#Quarter of the year

def quarter_of(month):
    return (month -1) // 3 + 1



#Codewars 3
#Grasshopper - Grade book

def get_grade(s1, s2, s3):
    average = (s1 + s2 + s3) / 3
    if average >= 90:
        return 'A'
    elif average >= 80:
        return 'B'
    elif average >= 70:
        return 'C'
    elif average >= 60:
        return 'D'
    else:
        return 'F'
    


#Codewars 4
#Convert boolean values to strings 'Yes' or 'No'.

def bool_to_word(boolean):
    if boolean == True:
        return 'Yes'
    else:
        return 'No'
    


#Codewars 5
#Opposite number

def opposite(number):
    return -number



#Codewars 6
#Return Negative

def make_negative( number ):
    return -abs(number) if number != 0 else 0



#Codewars 7
#Convert a Boolean to a String

def boolean_to_string(b):
    return str(b)