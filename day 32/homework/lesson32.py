def calculator(num1, num2, operation):
    if operation == "plus":
        return num1 + num2
    elif operation == "minus":
        return num1 - num2
    elif operation == "multify":
        return num1 * num2
    elif operation == "division":
        if num2 == 0:
            return 'it is wrong,you cannot division zero'
        else:
            return num1 / num2
    else:
        print("it is wrong operation")

print(calculator(10, 5, "plus"))    
print(calculator(10, 5, "minus"))    
print(calculator(10, 5, "multify"))    
print(calculator(10, 5, "division"))       #ნაშთიანი
print(calculator(10, 0, "division"))       #უნაშთო
print(calculator(10, 5, "wrong"))      




