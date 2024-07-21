#1)for loop - ის დახმარებით, 126 - დან, 0 - მდე, საპირისპირო მიმართულებით გამოიტანეთ რიცხვები, ჯერ 1 ნაბიჯით, შემდეგ 2 ნაბიჯით და შემდეგ 3 ნაბიჯით.(126, 125, 124 და ა.შ)

for i in range(126, -1, -1):
    print(i)









#2)for loop - ის დახმარებით 1 - დან 47 - მდე გამოიტანეთ რიცხვების ჯამი, გამოიყენეთ ( + )ოპერატორი, ხოლო შემდეგ განახორციელეთ იგივე რამ, ( * ) - ოპერატორზე.

total_sum = 0
for i in range(1, 48):
    total_sum += i

print(total_sum)


total_product = 1  
for i in range(1, 48):
    total_product *= i

print(total_product)



#3)while loop  - ის დახმარებით, დაითვალეთ რიცხვი 100 - დან 1 - მდე

num = 100
while num >= 1:
    print(num)
    num -= 1


