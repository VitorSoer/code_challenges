# Very simple, given an integer or a floating-point number, find its opposite.


def opposite(number: float):
    transform_to_positive = abs(number)
    transform_to_negative = -number

    return transform_to_negative if number > 0 else transform_to_positive
