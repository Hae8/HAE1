outFp = None
outStr, fName = "",""

fName = input("파일명을 입력하세요:")

outFp = open(fName, "w", encoding='UTF-8')

while True:
    outStr = input("내용입력 : ")
    if outStr !="":
        outFp.writelines(outStr + "\n")
    else :
        break

outFp.close()
print("---정상적으로 파일에 씀---")
