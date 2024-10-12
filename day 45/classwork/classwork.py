#1)
def printBill(customer_name):
    print("=====")
    print(customer_name)
    print("=====")

name = input("Enter customer name: ")
printBill(name)



#2)
def funct(name):
    print(f'Welcome {name}')

funct('Jashi')



#3)
def cube(length, width):
    return length * width

length = int(input("Enter the length: "))
width = int(input("Enter the width: "))

result = cube(length, width)
print(result)



#4)
def sum(x):
    res = 0
    for i in range(x):
        res+=1
    return res

print(sum(4))