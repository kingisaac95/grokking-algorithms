# find position of `target` in subarray nums[left…right]
def binary_search(list, left, right, target):
    # base case
    if left > right:
        return -1

    mid = (left + right) // 2

    if list[mid] == target:
        return mid
    elif list[mid] > target:
        # move right pointer to the item before mid
        return binary_search(list, left, mid - 1, target)
    else:
        # move left pointer to the item after mid
        return binary_search(list, mid + 1, right, target)


my_list = [1, 3, 5, 7, 9]
right = len(my_list) - 1
left = 0

print(binary_search(my_list, left, right, 3))
print(binary_search(my_list, left, right, -1))
