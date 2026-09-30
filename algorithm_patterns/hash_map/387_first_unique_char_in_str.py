class Solution:
    def firstUniqChar(self, s: str) -> int:
        char_map = {}

        for index, char in enumerate(s):
            if char in char_map:
                char_map[char].append(index)
            else:
                char_map[char] = [index]

        for index_list in char_map.values():
            if len(index_list) == 1:
                return index_list[0]
