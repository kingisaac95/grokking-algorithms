def count_items(list):
    if len(list) < 2:
        return 1
    else:
        return 1 + count_items(list[1:])


print(count_items([2, 4, 6]))
