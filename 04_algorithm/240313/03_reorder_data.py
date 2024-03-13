class Solution:
    def reorderLogFiles(self, logs: list[str]) -> list[str]:
        letter_log = []
        number_log = []
        for log in logs:
            if ''.join(log.split()[1:]).isalpha():
                # 문자로그
                letter_log.append(log)
            else:
                # 숫자로그
                number_log.append(log)
        letter_log.sort(key= lambda x: (x.split()[1:], x.split()[0])) # 1번째부터 알파벳 순서 정렬, 같으면 0번째 식별자 기준
        # print(letter_log)
        # print(number_log)
        
        return letter_log + number_log

s = Solution()
logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
result = s.reorderLogFiles(logs)
print(result)