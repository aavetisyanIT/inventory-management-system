class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        s_pointer, t_pointer = len(s) - 1, len(t) - 1

        while s_pointer >= 0:
            if t_pointer < 0:
                return False
            if s[s_pointer] == t[t_pointer]:
                s_pointer -= 1
                t_pointer -= 1
            else:
                t_pointer -= 1
        return True
