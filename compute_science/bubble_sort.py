def swap(left, right, arr):
  temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp

# Todo: add isSwap optimization 
def bubble_sort(arr):
  for i in range(0, len(arr) -1):
    for j in range(0, len(arr) - i -1):
        if j >= len(arr) - 1: continue 
        if arr[j] > arr[j + 1]:
          swap(j, j +1, arr)

  return arr

testArr = [4,6,1,2,90, 55, -1, -11]
print(bubble_sort(testArr))