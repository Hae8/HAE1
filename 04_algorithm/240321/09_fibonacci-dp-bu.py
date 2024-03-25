class Solution:
    def fib(self, n: int) -> int:
        # 바텀업 방식 : 반복문을 사용해서 작은 부분 문제를 풀고, 그 결과를 활용해 큰 문제를 해결
        # 미리 값을 구해놓고, 그 결과를 이용한다.
        # 적은 메모리 사용과 빠른 속도 but 필요없는 값까지 계산하는 상황이 있을 수 있다.
        tabul = [0, 1]
        if n in tabul:
            return n
        for i in range(2, n+1):
            tabul.append(tabul[i-1] + tabul[i-2])
        return tabul[-1]

s = Solution()
print(s.fib(6))