def merge(arr1: list[int], arr2: list[int]):
    result: list[int] = [0] * (len(arr1) + len(arr2))
    resultIndex = 0
    arr1Index = 0
    arr2Index = 0

    while arr1Index < len(arr1) and arr2Index < len(arr2):

        if arr1[arr1Index] <= arr2[arr2Index]:
            result[resultIndex] = arr1[arr1Index]
            resultIndex += 1
            arr1Index += 1
        else:
            result[resultIndex] = arr2[arr2Index]
            resultIndex += 1
            arr2Index += 1

    while len(arr1) > arr1Index:
        result[resultIndex] = arr1[arr1Index]
        resultIndex += 1
        arr1Index += 1
    while len(arr2) > arr2Index:
        result[resultIndex] = arr2[arr2Index]
        resultIndex += 1
        arr2Index += 1

    return result


print(merge([1, 3, 5, 7], [2, 4, 6, 8, 10]))
