def swap(left, right, arr):
    temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp


def insertion_sort(arr: list[int]):
    for i in range(1, len(arr)):
        swapIndex = i
        val = arr[i]
        for j in range(0, i):
            # print("inner loop j: ", j, arr[j])
            # print("inner loop i: ", i, arr[i])

            if arr[j] > arr[i]:
                swapIndex = j
                arr[j] = arr[j - 1]
            else:
                break
        # print("outer loop swapIndex: ", swapIndex, arr[swapIndex])
        # print(f"swapping swapIndex:{swapIndex}({arr[swapIndex]}) with i: {i}({arr[i]})")
        arr[swapIndex] = val
        print(arr)


testArr = [100, -6, 1, 2, 90, 55, -1, -11]
#          j     i
insertion_sort(testArr)
print(testArr)
