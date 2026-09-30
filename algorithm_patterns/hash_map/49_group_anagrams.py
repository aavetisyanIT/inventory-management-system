from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        groups_map = defaultdict(list)

        for s in strs:
            key = [0] * 26

            for char in s:
                key_index = ord(char) - ord("a")
                key[key_index] += 1

            groups_map[tuple(key)].append(s)

        return list(groups_map.values())
