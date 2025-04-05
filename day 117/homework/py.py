#Codewars 1
#Categorize New Member

def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]



#Codewars 2
#Find the next perfect square!

def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return int((root + 1) ** 2)
    return -1



#Codewars 3
#Sum of odd numbers

def row_sum_odd_numbers(n):
    return n ** 3



#Codewars 4
#Growth of a Population

def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 = int(p0 + p0 * (percent / 100) + aug)
        years += 1
    return years



#Codewars 5
#Printer Errors

def printer_error(s):
    errors = sum(1 for char in s if char < 'a' or char > 'm')
    return f"{errors}/{len(s)}"

