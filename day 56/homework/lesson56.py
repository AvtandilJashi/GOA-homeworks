#Codewars 1
#Rock Paper Scissors!

def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif (p1 == "rock" and p2 == "scissors") or \
         (p1 == "scissors" and p2 == "paper") or \
         (p1 == "paper" and p2 == "rock"):
        return "Player 1 won!"
    else:
        return "Player 2 won!"
    


#Codewars 2
#Grasshopper - Summation

def summation(num):
    return num * (num + 1) // 2



#Codewars 3
#Last

def last(*args):
    if len(args) == 1:
        return args[0][-1] if isinstance(args[0], (list, str)) else args[0]
    else:
        return args[-1]



#Codewars 4
#Welcome!

def greet(language):
    greetings = {
        "english": "Welcome",
        "czech": "Vitejte",
        "danish": "Velkomst",
        "dutch": "Welkom",
        "estonian": "Tere tulemast",
        "finnish": "Tervetuloa",
        "flemish": "Welgekomen",
        "french": "Bienvenue",
        "german": "Willkommen",
        "irish": "Failte",
        "italian": "Benvenuto",
        "latvian": "Gaidits",
        "lithuanian": "Laukiamas",
        "polish": "Witamy",
        "spanish": "Bienvenido",
        "swedish": "Valkommen",
        "welsh": "Croeso"
    }
    
    return greetings.get(language, "Welcome")

