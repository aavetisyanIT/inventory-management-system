class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        # define result array
        result = []
        # sort nums in place
        nums.sort()

        # for loop for first num
        for i, num in enumerate(nums):
            # check for duplicated first num and skip
            if nums[i] == nums[i - 1] and i > 0:
                continue

            # create left and right pointers
            left = i + 1
            right = len(nums) - 1
            # while loop where left < right
            while left < right:
                # calculate sum of current three numbers
                threeSum = num + nums[left] + nums[right]
                # check if three sum is 0
                if threeSum == 0:
                    # append array of current three nums to result
                    result.append([num, nums[left], nums[right]])
                    # move left and right pointers to next positions
                    left += 1
                    right -= 1
                    # check if current and next positions are the same and skip duplicates
                    while nums[left - 1] == nums[left] and left < right:
                        left += 1
                    while nums[right + 1] == nums[right] and right > left:
                        right -= 1
                # if three sum is more than 0 move right to next position
                elif threeSum > 0:
                    right -= 1
                # else move left to next position
                else:
                    left += 1
        return result
