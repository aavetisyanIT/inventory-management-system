import math

def binary_search(arr, num, start = 0, end=None):
  if end is None:
    end = len(arr)  # Use the actual length of the list
  if start >= end: return start
  half_index = math.floor((start + end) /2)
  print('AAA half_index: ', half_index)
  if num < arr[half_index]:
    binary_search(arr, num, start, half_index)
  else:
    binary_search(arr, num, half_index, end)
  return -1

testArr = [1,2,5,6,7]
print(binary_search(testArr, 2))