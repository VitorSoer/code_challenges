# Given an integer as input, can you round it to the next multiple of 5


def round_to_next5(n):
    return n + (5 - n % 5) if n % 5 != 0 else n
