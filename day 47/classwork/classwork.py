#სიტყვის რიცხვი ტექსტში

def word_count(text):
    words = text.split() 
    return len(words)

text = "Hello world"
print("Number of word:", word_count(text))



#პირობითი ოპერაცია რიცხვის დადებითობის შემოწმებისთვის

def check_number_sign(number):
    if number > 0:
        print("Number is positive")
    elif number < 0:
        print("Number is negative")
    else:
        print("Number = 0")

number = float(input("Enter number: "))
check_number_sign(number)



#მომხმარებლის ასაკის კატეგორიზაცია

def categorize_age(age):
    if age < 0:
        return "Age can't be negative!"
    elif age < 13:
        return "Kid"
    elif age < 18:
        return "Teenager"
    elif age < 65:
        return "Adult"
    else:
        return "old"

age = int(input("Enter your age: "))
print(categorize_age(age))



