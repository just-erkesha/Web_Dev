n = int(input())  # ввод количества элементов массива
a = list(map(int, input().split()))  # ввод элементов массива

# вывод четных элементов массива
for i in range(n):
    if a[i] % 2 == 0:
        print(a[i], end=' ')
