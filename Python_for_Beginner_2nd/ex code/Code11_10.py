inFp, outFp = None, None
inStr = ""

inFp = open("./ex code/","rb")
outFp = open("./ex code/picture1.jpg", "wb")

while True:
    inStr = inFp.read(1)
    if not inStr:
        break
    outFp.write(inStr)

inFp.close()
outFp.close()
print("---이파일이 정상적으로 복사되었음---")
