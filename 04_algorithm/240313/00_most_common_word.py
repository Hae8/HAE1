import re, collections
class Solution:
    def mostCommonWord(self, paragraph: str, banned: list[str]) -> str:
        new_paragraph = re.sub('\W',' ',paragraph).lower()
        new_paragraph_list = [i for i in new_paragraph.split() if i not in banned]
        
        new_paragraph_counter = collections.Counter(new_paragraph_list)
        result_list = new_paragraph_counter.most_common(1)
        result_tuple = result_list[0]
        result = result_tuple[0]
        return result
    
s = Solution()
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
s.mostCommonWord(paragraph, banned)