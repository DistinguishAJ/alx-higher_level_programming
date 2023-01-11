#!/usr/bin/python3
"""Function that appends a string at the end of a text file (UTF8
) and returns the number of characters added.
"""


def append_write(filename="", text=""):
    """Takes in str filename to write to, and str text to append
    to file.
    """

    with open(filename, "a", encoding="utf-8") as appendFile:
        appendFile.write(text)
        return len(text)
