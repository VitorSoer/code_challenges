# Our football team has finished the championship.
# Our team's match results are recorded in a collection of strings.
# Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.


def points(games):
    points: int = 0

    for game in games:
        our_score = int(game[0])
        opponent_score = int(game[2])

        if our_score > opponent_score:
            points += 3

        if our_score == opponent_score:
            points += 1

        if our_score < opponent_score:
            points += 0

    return points
