class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        if len(nums) == 1:
            return 1
        slow = 0
        fast = slow + 1

        while fast < len(nums) - 1 and slow < len(nums) - 1:
            if nums[fast + 1] == nums[slow]:
                while fast < len(nums) - 2:
                    nums[fast + 1], nums[fast + 2] = nums[fast + 2], "_"
                    fast += 1
                fast = slow + 1
            else:
                slow += 1
                fast += 1
        while nums[fast] == "_":
            fast -= 1
        return fast + 1
