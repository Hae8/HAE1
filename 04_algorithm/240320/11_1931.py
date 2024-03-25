import sys
# 2) 입력받는 횟수(N)를 입력받는다.
N = int(sys.stdin.readline())

meeting = []
# 3) N번 만큼 반복해서 시작시간과 끝나느 시간을 가져온다.
for _ in range(N):
#   (start, end) 튜플로 만들어서 meeting이라는 배열에 추가
    start, end = [int(i) for i in sys.stdin.readline().split()]
    meeting.append((start, end))

# 4) end가 짧은 순으로 meeting 정렬!!! (만약 end가 같다면, start가 짧은 순!!!!)
meeting.sort(key=lambda x: (x[1], x[0]))
meeting = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)] 

result = 0
finish = 0
# 5) 정렬된 meeting을 반복한다. [변수 i]
# 6) i는 (start, end)로 구성되어 있다.
for start, end in meeting:
#   7) start가 finish보다 크거나 같으면,
    if start >= finish:
#       8) result 증가 & finish = end
        result += 1
        finish = end

# 9) result 출력
print(result)