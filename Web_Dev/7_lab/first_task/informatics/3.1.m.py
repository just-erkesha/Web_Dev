n = int(input())  # ввод количества чисел
zeros_count = 0  # инициализация счетчика нулей

# подсчет количества нулей
for i in range(n):
    number = int(input())
    if number == 0:
        zeros_count += 1

print(zeros_count)  # вывод количества нулей
