inFp = None
inStr = ""

inFp = open("./ex code/data1.txt", "r", encoding='UTF-8')

inStr = inFp.readline()
print(inStr,end = "")

inStr = inFp.readline()
print(inStr, end = "")

inStr = inFp.readline()
print(inStr, end = "")

inFp.close()
