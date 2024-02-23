inFp = None
inStr = ""

inFp = open("./ex code/data1.txt", "r", encoding='UTF-8')

inList = inFp.readlines()
print(inList)

inFp.close()
