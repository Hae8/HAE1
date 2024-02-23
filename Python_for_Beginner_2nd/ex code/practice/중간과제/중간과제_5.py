name=input('이름:')
number=int(input('문제 개수:'))
Q=[]
print('**********************************')
for i in range(1,number+1,1):
    i=input('%d번 문제를 해결했나요?(y/n):' %i)
    Q.append(i)
print('**********************************')
print('%s학생, 총 %d문제를 해결했습니다.'%(name, Q.count('y')))

    
