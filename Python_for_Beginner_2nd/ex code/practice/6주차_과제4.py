tt1=[]
tt2=[]
value=1
for i in range (0,3):
    for k in range(0,3):
        tt1.append(value)
        value+=1
    tt2.append(tt1)
    tt1=[]

for i in range(0,3):
    for k in range(0,3):
        print("% 3d" % tt2[i][k], end="")
    print("")
