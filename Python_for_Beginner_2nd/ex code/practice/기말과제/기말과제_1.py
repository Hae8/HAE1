inFp = None
inList = []

inFp = open (input("파일 이름을 입력하세요: "), "r", encoding = "UTF-8")

inList = inFp.read()
print("파일 안에는 총 {} 개의 글자가 있습니다." .format(len(inList)))
