
def insertionSort(arr: list[int]):
  for i in range(1, len(arr)):
    value = arr[i]
    while i > 0 and value < arr[i - 1]:
      arr[i] = arr[i-1]
      i = i - 1
    arr[i] = value
  return arr

print(insertionSort([3,1, 9, 0, 4]))