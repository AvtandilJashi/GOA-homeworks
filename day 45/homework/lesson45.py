#ფუნქცია: რაოდენობის დათვლა

def count_items(item_list, item):
    return item_list.count(item)

items = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple']
item_to_count = 'apple'

result = count_items(items, item_to_count)
print(result)



#ფუნქცია: ჯამის გამოთვლა

def sum_of_list(num_list):
    total = 0
    for num in num_list:
        total += num
    return total

numbers = [1, 2, 3, 4, 5]
result = sum_of_list(numbers)
print(result)



#ფუნქცია: საშუალო მნიშვნელობის გამოთვლა

def average_of_list(num_list):
    if not num_list:
        return 0
    
    total = 0
    for num in num_list:
        total += num
    
    average = total / len(num_list)
    return average

numbers = [1, 2, 3, 4, 5]
result = average_of_list(numbers)
print(result) 



#ფუნქცია: სიის გადაბრუნება

def reverse_list(items):
    reversed_items = []
    for item in items:
        reversed_items.insert(0, item)  
    return reversed_items

original_list = [1, 2, 3, 4, 5]
result = reverse_list(original_list)
print(result) 

