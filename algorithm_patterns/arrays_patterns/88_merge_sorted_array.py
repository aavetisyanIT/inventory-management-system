class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        nums1_pointer, nums2_pointer = m - 1, n - 1

        for i in range(m + n - 1, -1, -1):
            if nums2_pointer < 0:
                break
            if nums1[nums1_pointer] > nums2[nums2_pointer] and nums1_pointer >= 0:
                nums1[i] = nums1[nums1_pointer]
                nums1_pointer -= 1
            else:
                nums1[i] = nums2[nums2_pointer]
                nums2_pointer -= 1
