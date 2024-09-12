#Classwork 1: List Functions

queue = ['John','Amy','Bob','Adam']

queue.append('Scarlet')

print(queue)


#Classwork 2: Basic List Operations

fruits = ["apple", "banana", "watermalon", "blackberry", "melon"]

print(fruits)

print("First item:", fruits[0])
print("Last item:", fruits[-1])

fruits.append("fig")
fruits.remove("banana")

fruits[1] = "blueberry"

print("Length of the list:", len(fruits))



#Classwork 3: List Functions and Methods

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

numbers.append(100)

numbers.insert(0, 5)

numbers.remove(30)

numbers.sort()

numbers.reverse()

index_of_50 = numbers.index(50)
print("Index of 50:", index_of_50)

count_of_20 = numbers.count(20)
print("Count of 20:", count_of_20)

print("Final list:", numbers)
