from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        note_map = Counter(ransomNote)
        magazine_map = Counter(magazine)

        for note_map_key in note_map:
            if note_map_key not in magazine_map:
                return False
            if magazine_map[note_map_key] < note_map[note_map_key]:
                return False
        return True
