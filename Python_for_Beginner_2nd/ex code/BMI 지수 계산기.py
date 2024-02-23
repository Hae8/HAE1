##BMI지수 계산하여 결과 알려주기

height = float(input("키를 m단위로 입력해주세요;"))
weight = float(input("몸무게를 kg단위를 입력해주세요;"))

bmi = weight/(height*height)

if bmi < 18.5:
    print("bmi지수는",bmi,"이며,저체중 상태입니다.")
elif bmi < 23:
    print("bmi지수는",bmi,"이며,정상 상태입니다.")
elif bmi < 25:
    print("bmi지수는",bmi,"이며,과체중 상태입니다.")
elif bmi < 30:
    print("bmi지수는",bmi,"이며,비만1 상태입니다.")
elif bmi < 40:
    print("bmi지수는",bmi,"이며,비만2 상태입니다.")
else :
    print("bmi지수는",bmi,"이며,심각한비만3 상태입니다.")
