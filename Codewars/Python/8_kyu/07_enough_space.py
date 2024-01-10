# Bob is working as a bus driver.
# He wants you to write a simple program telling him if he will be able to fit all the passengers.


def enough(capacity, onboard, waiting):
    free_space = capacity - onboard
    can_come_in = waiting - free_space

    return 0 if can_come_in <= 0 else can_come_in
