# Write a function findNeedle() that takes an array full of junk but containing one "needle"
# After your function finds the needle it should return a message (as a string) that says:
# "found the needle at position " plus the index it found the needle, so:


def find_needle(haystack):
    array_length = len(haystack)
    needle_position: int

    for position in range(array_length):
        if haystack[position] == "needle":
            needle_position = position

    return f"found the needle at position {needle_position}"
