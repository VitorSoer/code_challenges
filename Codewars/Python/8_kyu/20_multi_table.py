# Your goal is to return multiplication table for number that is always an integer from 1 to 10.


def multi_table(number):
    index = 1
    table_str = ""

    while index <= 10:
        table_str += f"{index} * {number} = {index * number}"
        table_str += "\n" if index < 10 else ""
        index += 1

    return table_str
