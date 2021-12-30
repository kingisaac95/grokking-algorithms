def find_max(list):
    if len(list) < 2:
        return list[0]
    else:
        return max(list[0], find_max(list[1:]))


print(find_max([2, 8, 4, 6]))
