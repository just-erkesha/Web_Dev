def xor(x: bool, y: bool) -> bool:
    return (x and not y) or (not x and y)

x, y = map(bool, map(int, input().split()))
print(int(xor(x, y)))
