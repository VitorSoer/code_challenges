# If the function is passed a valid PIN string, return true, else return false.


def validate_pin(pin):
    splittedPin = list(str(pin))

    if len(splittedPin) == 4 or len(splittedPin) == 6:
        if all(char.isdigit() for char in splittedPin):
            return True

    return False
