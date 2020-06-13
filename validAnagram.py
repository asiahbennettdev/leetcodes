1.Given two strings s and t , write a function to determine if t is an anagram of s.
Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
Note:
You may assume the string contains only lowercase alphabets.


PREP
Parameters:two strings (s,t)
Return:boolean true or false
Example 1:Input: s = "anagram", t = "nagaram"
Output: true
Example 2:Input: s = "rat", t = "car"
Output: false
Pseudocode:
1.check the length of s and t
2.if s is NOT equal to t, return false
3.return sorted list (s) only if its equal to t


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return false

        return sorted(s) == sorted(t)
