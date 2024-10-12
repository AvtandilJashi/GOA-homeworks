#1)შემქნით ფუნცქცია რომელიც არგუმენტად მიიღებს ინტეჯერს, ამ ფუნქციის დავალებაა რომ აიღოს ეს ინტეჯერი და დაგვიბრუნოს გაორმაგებული

def double(number):
    return number * 2

result = double(5)
print(result) 



#2)დაწერე ფუნქცია greet(name), რომელიც იღებს ადამიანის სახელს და აბრუნებს მისალმების ტექსტს

def greet(name):
    return f"Hello, {name}!"

print(greet("Avtandili"))  



#3)შექმენით ფუნქცია is_even(num), რომელიც ამოწმებს, არის თუ არა რიცხვი ლუწი, თუ ლუწია, აბრუნებს True, სხვა შემთხვევაში False.

def is_even(num):
    return num % 2 == 0

print(is_even(4))  
print(is_even(5))  
print(is_even(0))  



#4)შექმენით მარტივი ფუნქცია თქვენი სურვილით რომელსაც მისცემთ default valueს

def greet_user(name="Avtandili"):
    return f"Hello, {name}!"

print(greet_user())        
print(greet_user("Avtandili"))  



#5)შექმენით ფუნქცია nickname(name), რომელიც არგუმენტად იღებს სახელს და აბრუნებს პირველი სამი ასო(გამოიყენეთ slicingი)

def nickname(name):
    return name[:3]

print(nickname("Avtandili"))  
print(nickname("Gurami"))   
print(nickname("Shota"))       



