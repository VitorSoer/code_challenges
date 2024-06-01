# Check to see if a string has the same amount of 'x's and 'o's.


def xo(str):
    x_count = 0
    o_count = 0

    for char in str:
        if char == "x" or char == "X":
            x_count += 1
        elif char == "o" or char == "O":
            o_count += 1

    return x_count == o_count or (x_count == 0 and o_count == 0)
