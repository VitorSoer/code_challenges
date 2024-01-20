# Warn the sheep in front of the wolf that it is about to be eaten.


def warn_the_sheep(queue):
    reversedQueue = queue[::-1]

    for animal in reversedQueue:
        if animal == "wolf":
            wolf_position = reversedQueue.index(animal)
            tired_farmer_msg = "Pls go away and stop eating my sheep"
            wolf_alert_msg = f"Oi! Sheep number {wolf_position}! You are about to be eaten by a wolf!"

            return wolf_alert_msg if wolf_position > 0 else tired_farmer_msg
