#Codewars 1
#Count the Monkeys!

def monkey_count(n):
    result = []
    for j in range(1, n + 1):
        result.append(j)
    return result



#Codewars 2
#Reversed sequence

def countdown(n):
    result = []
    while n > 0:
        result.append(n)
        n -= 1
    return result



#Codewars 3
#Reversed Words

def reverse_words(s):
    words = s.split()

    words.reverse()

    return ' '.join(words)



#Codewars 4
#Reversed sequence

def reverse_seq(n):
    result = []
    while n > 0:
        result.append(n)
        n -= 1
    return result
