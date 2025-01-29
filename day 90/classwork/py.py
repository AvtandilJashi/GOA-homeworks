#ლისტი
#1. pop, append, item assignment, mutable
#2. შეგვიძლია შევინახოთ ineteger_იც boolean_იც და ineteger_იც,ანუ შეგვიძლი ყველანარი ტიპის შენახვა.
#3. slicing, indexing, have indexes

#ტაფლი
#1. შეგვიძლია ყველა ტიპის მონაცემის შენახვა და ასევე ელემნტისაც.
#2. immutable
#3. slicing, indexing, have indexes

#სეტები
#1. შეგვიძლია ყველა ტიპის მონაცემის შენახვა და ასევე ელემნტისაც.
#2. add, remove, mutable
#3. სეტს არ აქვს დუბლიკატები

list1 = [1, 2, 3, "BMW", "BENTLEY"]

tuple1 = (4, 5, 6, "MERCEDES", "OPEL")

set1 = {7, 8, 9, "BUGGATI", "FERRARI"}



list1.append("BMW")
print("After append:", list1)

list1.remove("BENTLEY")
print("After remove:", list1)


print("Tuple element at index 1:", tuple1[1])
print("Count of 'cherry' in tuple:", tuple1.count("FERRARI"))

set1.add("SHEVROLET")
print("After add:", set1)

