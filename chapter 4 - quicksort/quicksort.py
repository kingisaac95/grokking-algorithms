def quicksort(list):
    if len(list) < 2:
        return list
    else:
        pivot = list[0]
        less = [i for i in list[1:] if i < pivot]
        greater = [i for i in list[1:] if i > pivot]

        return quicksort(less) + [pivot] + quicksort(greater)


print(quicksort([3, 4, 62, 1, 7, 4, 9, 0]))
