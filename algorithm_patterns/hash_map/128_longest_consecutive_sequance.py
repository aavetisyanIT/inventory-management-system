class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        nums_set = set(nums)

        longest_length = 0

        for num in nums_set:
            if num - 1 not in nums_set:
                current_length, next_num = 1, num + 1
                current_num = num
                while next_num in nums_set:
                    current_length += 1
                    next_num += 1
                longest_length = max(longest_length, current_length)
        return longest_length
