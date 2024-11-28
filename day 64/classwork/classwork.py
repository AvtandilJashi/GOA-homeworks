#Codewars 1
#Grasshopper - Debug sayHello

def say_hello(name):
    return f"Hello, {name}"



#Codewars 2
#Array plus array

def array_plus_array(arr1,arr2):
    sum_arr1 = sum(arr1)
    sum_arr2 = sum(arr2)

    return sum_arr1 + sum_arr2



#Codewars 3
#Count the Monkeys!

def monkey_count(n):
    result = []
    for j in range(1, n + 1):
        result.append(j)
    return result



#Codewars 4
#Reversed sequence

def countdown(n):
    result = []
    while n > 0:
        result.append(n)
        n -= 1
    return result

