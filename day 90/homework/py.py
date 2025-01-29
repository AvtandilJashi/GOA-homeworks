#3)

#Tuple გამოიყენება სტრუქტურირებულ მონაცემთა შესანახად.
#Set გამოიყენება როცა საჭიროა უნიკალური მნიშვნელობების შენახვა.



#4)

#1)

coordinates = (10, 20)

x, y = coordinates

print(x)  
print(y)



#2)

a, b = 5, 10

a, b = b, a  

print(a)  
print(b) 



#3)

def user_name():
    return "Giorgi", 25  

name, age = user_name()

print(name)  
print(age)   



#5)

list = [1, 2, 2, 3, 4, 4, 4, 5]

values = set(list)

print(values)  
