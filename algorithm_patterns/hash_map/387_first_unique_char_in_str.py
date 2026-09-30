class Solution:
    def firstUniqChar(self, s: str) -> int:
        char_map = {}

        # Count each character
        for char in s:
            char_map[char] = char_map.get(char, 0) + 1

        # Find the first character that appears once
        for index, char in enumerate(s):
            if char_map[char] == 1:
                return index

        return -1
