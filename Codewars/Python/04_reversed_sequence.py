# Build a function that returns an array of integers from n to 1 where n>0.


def reverse_seq(range_number):
    result = []

    for actual_number in range(range_number, 0, -1):
        result.append(actual_number)

    return result
