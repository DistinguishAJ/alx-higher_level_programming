#!/usr/bin/python3
"""Function that writes a string to a text file (UTF8) and return
s the number of characters written.
"""


def write_file(filename="", text=""):
    """Takes str filename to read, and str text to write to
    """

    with open(filename, "w", encoding="utf-8") as writeFile:
        writeFile.write(text)
        return len(text)
