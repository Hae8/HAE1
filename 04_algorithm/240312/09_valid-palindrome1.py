import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # new_s = [char.lower() for char in s if char.isalnum()]   
        # new_s = [char.lower() for char in re.findall('\w', s)]
        new_s = list(re.sub('[^a-zA-Z0-9]', '', s.lower()))
        print(new_s)
        while len(new_s) > 1:
            if new_s.pop(0) != new_s.pop() :
                return False
        return True
        
s = Solution()
result = s.isPalindrome("ab_a")
print(result)

#------------------------------------------------------------------------------#

# import sys
# input_list = sys.stdin.readline().rstrip().lower()

# def is_palindrome(input_list):
#     new_input_list=[]
#     for i in input_list:
#         if i.isalnum():
#             new_input_list.append(i)
#     while (len(new_input_list)) > 1:
#         if new_input_list.pop(0) != new_input_list.pop():
#             return False
#         return True

# print(is_palindrome(input_list))