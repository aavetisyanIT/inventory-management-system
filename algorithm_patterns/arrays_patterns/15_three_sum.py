class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []

        nums.sort()

        for i, num in enumerate(nums):
            if nums[i] == nums[i - 1] and i > 0:
                continue

            left, right = i + 1, len(nums) - 1

            while left < right:
                threeSum = num + nums[left] + nums[right]

                if threeSum == 0:
                    result.append([num, nums[left], nums[right]])

                    left += 1
                    right -= 1

                    while nums[left] == nums[left - 1] and left < right:
                        left += 1

                    while nums[right] == nums[right + 1] and left < right:
                        right -= 1

                elif threeSum < 0:
                    left += 1
                else:
                    right -= 1
        return result
