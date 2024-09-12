#Task: Format a String

name = input("Enter your name: ")
age = input("Enter your age: ")

welcome = "Hello, {} ! You are {} years old.".format(name, age)

print(welcome)



#Task: Join a List of Strings

words = ["GOA", "IS", "BEST"]

connecting = " ".join(words)

print(connecting)



#Task: Split a String

sentence = input("Enter a sentence: ")

answer = sentence.split()

print(answer)



#Task: Replace Substrings

sentence2 = input("Enter a sentence: ")

replace = input("Enter the word you want to replace: ")

new_word = input("Enter the new word to replace it with: ")

replace_sentence = sentence.replace(replace, new_word)

print("Modified sentence:", replace_sentence)



#Task: Convert to Lowercase

string = input("Enter a mixed-case string: ")

lowercase_string = string.lower()

print("Lowercase string:", lowercase_string)



#Task: Convert to Uppercase

sentence3 = input("Enter a sentence: ")
 
UPPERCASE_sentence = sentence.upper()

print("Uppercase sentence:", UPPERCASE_sentence)
