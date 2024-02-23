inFp, outFp = None, None
inStr, outStr = "",""
outList = []
sum=0

inFp = open("data.txt","r")
outFp = open("output.txt","w", encoding='UTF-8')

inStr = inFp.readlines()
inStr = list(map(lambda s:s.strip(), inStr))

for i in range(0,len(inStr)):
    num = float(inStr[i])
    sum = sum+num

aver = sum/len(inStr)

outStr= f"합계={sum}\n평균={aver}"
outFp.writelines(outStr)


inFp.close()
outFp.close()

