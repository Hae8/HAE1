def insertion_sorted(list):
    count = 0
    
    for i in range(1, len(list)):
        key = list[i]
        temp = i - 1
        
        while temp >= 0 and list[temp] > key:
            list[temp + 1] = list[temp]
            temp -= 1
            count += 1
            print (list)
        list[temp + 1] = key
        
    print(f'{count}번 만에 정렬 되었습니다.')
    return list

num_list = [5, 4, 2, 6, 3, 1] # 시간 복잡도: [O(n(n+1)/2)] -> [O(n²)] -> 이미 정렬이 되어있다면 정렬을 하지 않는다.
new_list = insertion_sorted(num_list)
print(new_list)