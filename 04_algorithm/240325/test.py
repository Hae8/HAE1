def solution(N, stages):
    answer = []
    clr_list = []
    fail_list = []
    fail_rate = {}
    
    for i in range(N):
        clear = 0
        for j in stages:
            if j > i :
                clear += 1
        clr_list.append(clear)
        
    for k in range(len(clr_list)):
        if k < len(clr_list):
            fail_list.append(clr_list[k-1]-clr_list[k])
        else:
            fail_list.append(0)

    for i in range(N):
        if i < N-1:
            fail_rate[i] = fail_list[i+1] / clr_list[i]
        else:
            fail_rate[i] = 0 / clr_list[i]
            
    print (clr_list, fail_list, fail_rate)
    
    sorted_fail = sorted(fail_rate.items(), key = lambda x: x[1])
    for sf in sorted_fail:
        answer.append(sf[0]+1)
    print(answer)
    return answer

solution(5, [2,1,2,6,2,4,3,3])