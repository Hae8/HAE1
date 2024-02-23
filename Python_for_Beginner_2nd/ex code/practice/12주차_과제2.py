inFp = None
inStr = ""
num=0

inFp = open("./ex code/data1.txt", "r", encoding='UTF-8')

while True: 
    inStr = inFp.readline()
    num += 1
    if inStr =="":
        break;
    
    print("%d:"%(num) + inStr ,end = "")
    
inFp.close()
