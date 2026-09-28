class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:

        # create a map of elements as keys and number of appearances as values
        num_count_map = {}
        # iterate over nums
        for num in nums:
            # check if num_count_map has num
            if num in num_count_map:
                # if true return True
                return True
            num_count_map[num] = 1
            # store num with count 1

        return False
