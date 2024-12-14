#Codewars 1
#Even numbers in an array

def even_numbers(arr,n):
    even_numbers = [i for i in arr if i % 2 == 0]
    return even_numbers[-n:]



#Codewars 2
#Basic Sequence Practice

def sum_of_n(n):
    length = abs(n) + 1
    result = []

    for i in range(length):
        term = i * (i + 1) // 2
        result.append(term if n >= 0 else -term)

    return result