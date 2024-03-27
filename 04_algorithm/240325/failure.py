def solution(N: int, stages: list[int]) -> list[int]:
    answer = []
    failure = {}
    trial_num = len(stages)
    for i in range(1, N+1):
        if trial_num != 0:
            fail_num = stages.count(i)
            failure[i] = fail_num / trial_num
            trial_num -= fail_num
        else:
            failure[i] = 0
    answer = sorted(failure, key = lambda x: failure[x], reverse=True)
    
    return answer

solution(5, [2,1,2,6,2,4,3,3])