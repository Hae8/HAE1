import sys
new_input =  sys.stdin.readline

ledger = []

num = int(new_input())

for _ in range(num):
    money = int(new_input())
    ledger.append(money) if money else ledger.pop()
print(sum(ledger))
