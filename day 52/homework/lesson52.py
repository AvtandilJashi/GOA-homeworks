#Codewars 1
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
    


#Codewars 2
#Quarter of the year

def quarter_of(month):
    return (month -1) // 3 + 1



#Codewars 3
#Sum of array singles\

def repeats(arr):
    return sum(num for num in arr if arr.count(num) == 1)



#Codewars 4
#Sum of positive

def positive_sum(arr):
    return sum(num for num in arr if num > 0)



#Codewars 5
#Area or Perimeter

def area_or_perimeter(l , w):
    if l == w:
        return l * w
    else:
        return 2 * (l + w)


