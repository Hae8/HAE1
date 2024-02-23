name = "해파리"
age = 20
print("My name is", name,",and", age,"-years old.")

name = input("이름 입력")
age = input("나이 입력")
print("My name is", name, ",and", age, "-years old.")

strVar = "affiliation"
intVar = "year"
affiliation = "대한민국대학교"
year = 2020
print("나는 ", year, "년도에 ",affiliation, "에 입학했습니다.")


number = int(input("좋아하는 숫자"))
color = input("좋아하는 색깔")
season = input("좋아하는 계절")
for i in range(0, number,1) :
    print(color, season, end = "")
