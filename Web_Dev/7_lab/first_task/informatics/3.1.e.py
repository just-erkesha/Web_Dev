a, n = map(int, input().split())

sum = 1
a_pow = 1
for i in range(1, n+1):
    a_pow *= a
    sum += a_pow

print(sum)
