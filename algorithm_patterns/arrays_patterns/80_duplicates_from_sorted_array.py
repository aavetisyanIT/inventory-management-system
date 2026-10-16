class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        slow = 2

        for fast in range(2, len(nums)):
            if nums[slow - 2] != nums[fast]:
                nums[slow] = nums[fast]
                slow += 1
        return slow
