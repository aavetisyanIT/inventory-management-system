def swap(left, right, arr):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp


def selection_sort(arr: list[int]) -> list[int]:
    for i in range(len(arr)):
        minIndex = i
        for j in range(i, len(arr)):
            if arr[j] < arr[minIndex]:
                minIndex = j
        swap(minIndex, i, arr)
    return arr


testArr = [4, 6, 1, 2, 90, 55, -1, -11]
selection_sort(testArr)
print(testArr)
