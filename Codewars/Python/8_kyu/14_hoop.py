# Write a program where Alex can input (n) how many times the hoop goes round
# and it will return him an encouraging message :)


def hoop_count(number_of_hoops):
    encourage_message = "Keep at it until you get it"
    congratulations_message = "Great, now move on to tricks"

    return encourage_message if number_of_hoops < 10 else congratulations_message
