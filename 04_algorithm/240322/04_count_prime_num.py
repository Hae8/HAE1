def solution(n, k):
    answer = 0
    base_k = ''
    # n을 k진수로 변환
    while n:
        base_k = str(n%k) + base_k
        n = n // k
    print(f'{k}진수로 변환하면요... {base_k}')
    
    # 소수 개수 세야죠
    base_k_list = [int(i) for i in base_k.split('0') if i != '']
    print(base_k_list)
    
    for i in base_k_list:
        is_prime = True
        if i < 2:
            continue
        for j in range(2, int(i**0.5)+1):
            if i % j == 0:
                print(f'안타깝네요, {i}는 소수가 아니에요')
                is_prime = False
                break
        if is_prime:
            answer += 1
    return answer


# solution(110011, 10)
print(solution(437674, 3))
