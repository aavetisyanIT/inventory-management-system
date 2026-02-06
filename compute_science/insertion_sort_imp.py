def insertion_sort(arr: list[int]):
    for i in range(1, len(arr)):
        val = arr[i]
        swapIndex = i
        while swapIndex > 0 and val < arr[swapIndex - 1]:
            arr[swapIndex] = arr[swapIndex - 1]
            swapIndex -= 1

        arr[swapIndex] = val
        print(arr)


testArr = [100, -6, 1, 2, 90, 55, -1, -11]
insertion_sort(testArr)
print(testArr)
