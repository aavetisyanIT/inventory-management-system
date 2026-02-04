def swap(left, right, arr):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp


# Todo: add isSwap optimization
def bubble_sort(arr):
    for i in range(0, len(arr)):
        swapped = False
        for j in range(0, len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                swap(j, j + 1, arr)
                swapped = True
        if not swapped:
            break

    return arr


testArr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(testArr))
