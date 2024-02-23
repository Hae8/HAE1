inFp = None
inList, inStr =[], ""
num=1

inFp = open("./ex code/data1.txt", "r", encoding='UTF-8')

inList = inFp.readlines()
for inStr in inList:
    print("%d:"%(num) + inStr ,end = "")
    num+=1

inFp.close()
