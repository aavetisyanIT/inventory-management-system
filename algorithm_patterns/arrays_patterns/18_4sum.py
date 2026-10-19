class Solution:
    def fourSum(self, nums: list[int], target: int) -> list[list[int]]:
        result = []
        nums.sort()

        for i in range(len(nums) - 3):
            if nums[i] == nums[i - 1] and i > 0:
                continue

            for j in range(i + 1, len(nums) - 2):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue

                left, right = j + 1, len(nums) - 1

                while left < right:
                    current_sum = nums[i] + nums[j] + nums[left] + nums[right]

                    if current_sum == target:
                        result.append([nums[i], nums[j], nums[left], nums[right]])
                        left += 1
                        right -= 1

                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1

                    elif current_sum < target:
                        left += 1
                    else:
                        right -= 1
        return result
