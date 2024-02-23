outFp = None
outStr = ""

outFp = open("./ex code/data2.txt", "w", encoding='UTF-8')

while True:
    outStr = input("내용입력 : ")
    if outStr !="":
        outFp.writelines(outStr + "\n")
    else :
        break

outFp.close()
print("---정상적으로 파일에 씀---")
