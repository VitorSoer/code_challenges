# You're writing code to control your town's traffic lights.
# You need a function to handle each change from green, to yellow, to red, and then to green again.


def update_light(current_light):
    if current_light == "green":
        return "yellow"

    if current_light == "yellow":
        return "red"

    if current_light == "red":
        return "green"
