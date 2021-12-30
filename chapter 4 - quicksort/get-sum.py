def get_sum(list):
    if len(list) < 2:
        return list[0]
    else:
        return list[0] + get_sum(list[1:])


print(get_sum([2, 4, 6]))
