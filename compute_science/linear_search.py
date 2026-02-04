def linear_search(arr, num):
    for index, currentNum in enumerate(arr):
        if num == currentNum:
            return index
    return -1


testArr = [1, 2, 5, 6, 7]
print(linear_search(testArr, 5))
