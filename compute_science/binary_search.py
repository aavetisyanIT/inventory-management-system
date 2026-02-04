import math


def binary_search(arr, num):
    left = 0
    right = len(arr)
    while left < right:
        mid_index = math.floor((left + right) / 2)
        if num == arr[mid_index]:
            return mid_index
        if num < arr[mid_index]:
            right = mid_index - 1
        else:
            left = mid_index + 1

    return -1


testArr = [1, 2, 5, 6, 7, 10, 100, 144, 49009]
print(binary_search(testArr, 144))
