# score = 100
# def score_change(score):
#     score -= 5

# score_change(score)
# print(score) # 100

# score = 100
# def score_change():
#     global score # global 이라는 키워드를 이용하여 지역변수를 전역변수로 인식하게 만들어 줄 수 있다.
#     score -= 5
# score_change()
# print(score) # 95

score = 100
def score_change(score):
    score -= 5
    return score 
score = score_change(score) # 재할당을 시켜줄 수도 있다.
print(score) # 95