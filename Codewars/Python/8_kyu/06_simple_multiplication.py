# This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


def simple_multiplication(number):
    is_even = number % 2 == 0

    return number * 8 if is_even else number * 9
