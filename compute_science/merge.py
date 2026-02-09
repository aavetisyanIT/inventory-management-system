def merge(arr1: list[int], arr2: list[int]):
    result: list[int] = []
    arr1Index = 0
    arr2Index = 0

    while arr1Index < len(arr1) and arr2Index < len(arr2):

        if arr1[arr1Index] <= arr2[arr2Index]:
            result.append(arr1[arr1Index])
            arr1Index += 1
        else:
            result.append(arr2[arr2Index])
            arr2Index += 1

    result.extend(arr1[arr1Index:])
    result.extend(arr2[arr2Index:])

    return result


print(merge([1, 3, 5, 7], [2, 4, 6, 8, 10]))
