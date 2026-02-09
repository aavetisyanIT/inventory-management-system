import math


def merge(arr1: list[int], arr2: list[int]):
    result: list[int] = []
    arr1Index = 0
    arr2Index = 0

    while arr1Index < len(arr1) and arr2Index < len(arr2):

        if arr1[arr1Index] <= arr2[arr2Index]:
            result.append(arr1[arr1Index])
            arr1Index += 1
        else:
            result.append(arr2[arr2Index])
            arr2Index += 1

    result.extend(arr1[arr1Index:])
    result.extend(arr2[arr2Index:])

    return result


def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    middleIndex = math.floor(len(arr) / 2)
    left = merge_sort(arr[0:middleIndex])
    right = merge_sort(arr[middleIndex:])
    return merge(left, right)


print(merge_sort([100, -6, 1, 2, 90, 55, -1, -11]))
