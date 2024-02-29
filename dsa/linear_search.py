def linear_search(list, target):
    """
    Returns the position of target index if found else returns None
    """

    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return None

numbers = [1,2,3,4,5,6,7,8,9,10]

print(linear_search(numbers,12))