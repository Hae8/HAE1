def average(*scores):
    def length():
        return len(scores)
    def sum():
        total = 0
        for score in scores:
            total += score
        return total
    return sum() / length() # 합계 / 개수
print(average(10, 20, 30, 40, 50))