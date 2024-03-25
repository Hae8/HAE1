class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        letter_dict = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
        }
        result = []
        word = ""
        if digits == "":
            return result
        def dfs(word):
            if len(word) == len(digits):
                result.append(word)
                return
            for i in letter_dict[digits[len(word)]]:
                dfs(word + i)
        dfs(word)
        return result

s = Solution()
print(s.letterCombinations("23"))