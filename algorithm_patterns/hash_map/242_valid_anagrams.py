from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        def map_str_chars(input_str: str):
            chars_map = {}
            for char in input_str:
                if char in chars_map:
                    chars_map[char] += 1
                else:
                    chars_map[char] = 0

            return chars_map

        s_map = map_str_chars(s)
        t_map = map_str_chars(t)

        return s_map == t_map

    def isAnagram_lib(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
