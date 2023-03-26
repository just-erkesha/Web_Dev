def min(a, b, c, d):
    return min(min(a, b), min(c, d))
    
# считываем четыре числа
a, b, c, d = map(int, input().split())

# вызываем функцию и выводим результат
print(min(a, b, c, d))
