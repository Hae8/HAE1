inFp, outFp=None, None
inStr, outStr = "",""
outList = []
sum=0

inFp = open("sales.txt","r")
outFp = open("output.txt","w", encoding='UTF-8')

inStr = inFp.readlines()
inStr = list(map(lambda s:s.strip(), inStr))

for i in range(0,len(inStr)):
    num = float(inStr[i])
    sum = sum+num

aver = sum/len(inStr)

outStr= "총매출 = %d\n평균 일매출 = %8.1f" %(sum,aver)
outFp.writelines(outStr)


inFp.close()
outFp.close()
