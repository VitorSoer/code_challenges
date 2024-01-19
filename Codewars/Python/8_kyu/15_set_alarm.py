# The function should return true if you are employed and not on vacation
# (because these are the circumstances under which you need to set an alarm).
# It should return false otherwise


def set_alarm(employed, vacation):
    employed_and_not_on_vacation = employed == True and vacation == False

    return True if employed_and_not_on_vacation else False
