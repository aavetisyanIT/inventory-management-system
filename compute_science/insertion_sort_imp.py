def insertion_sort(arr: list[int]):
    for i in range(1, len(arr)):
        print("======================")
        print("outer look i:", i, arr[i])

        val = arr[i]
        swapIndex = i
        while swapIndex > 0 and val < arr[swapIndex - 1]:
            arr[swapIndex] = arr[swapIndex - 1]
            print("inner loop arr: ", arr)
            swapIndex -= 1

        print("Outer loop swapIndex: ", swapIndex)
        arr[swapIndex] = val
        print("Outer loop arr: ", arr)
        print("======================")


testArr = [100, -6, 1, 2, 90, 55, -1, -11]
insertion_sort(testArr)
print(testArr)
