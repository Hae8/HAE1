def selection_sorted(list):
    count = 0
    
    for i in range(len(list) - 1): # O(n-1)
        min_idx = i
        
        for j in range(i + 1, len(list)): # O(n-1)
            # 내가 생각하는 최소값 후보 = list[min_idx]
            # 비교 대상 값 = list[j]
            # print(f'{list[min_idx]}과 {list[j]}를 비교한다.')
            
            count += 1
            if list[min_idx] > list[j]:
                # print(f'이제 최소값은 {list[j]}이다.')
                
                min_idx = j
            list[min_idx], list[i] = list[i], list[min_idx]
            
        # print(list)
    print(f'{count}번 만에 정렬 되었습니다.')
    return list

num_list = [5, 4, 2, 6, 3, 1] # 시간 복잡도: [O(n²)] -> 이미 정렬이 되어있어도 다시 정렬을 한다.
new_list = selection_sorted(num_list)
print(new_list)