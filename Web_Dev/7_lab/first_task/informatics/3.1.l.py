binary_number = input()  # ввод числа в двоичной системе
decimal_number = 0  # инициализация десятичного числа

# перевод числа в десятичную систему
for digit in binary_number:
    decimal_number = decimal_number * 2 + int(digit)

print(decimal_number)  # вывод десятичного числа
