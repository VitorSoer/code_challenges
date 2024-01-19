# Create a function that takes 2 integers in form of a string as an input,
# and outputs the sum (also as a string):


def sum_str(number_one, number_two):
    first_number = number_one or "0"
    second_number = number_two or "0"

    result = int(first_number) + int(second_number)

    return f"{result}"
