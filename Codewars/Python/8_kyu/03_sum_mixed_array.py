# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.


def sum_mix(mixed_array):
    total_sum = 0

    for value in mixed_array:
        if isinstance(value, str):
            total_sum += float(value)

        else:
            total_sum += value

    return total_sum
