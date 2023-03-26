def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

n = int(input())
k = int(input())

numerator = factorial(n)
denominator = factorial(k) * factorial(n - k)

result = numerator // denominator

print(result)
