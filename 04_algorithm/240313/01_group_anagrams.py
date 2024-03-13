import collections
class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        my_ana_dd = collections.defaultdict(list)
        for str in strs:
            my_ana_dd[''.join(sorted(str))].append(str) #defaultdict을 사용하여 기본값이 텅 빈 리스트가 되었기 때문에 append()를 이용한다.
        return list(my_ana_dd.values())   
        
s = Solution()
strs = ["eat","tea","tan","ate","nat","bat"]
result = s.groupAnagrams(strs)
print(result)