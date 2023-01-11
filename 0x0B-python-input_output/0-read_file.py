#!/usr/bin/python3
"""
function that reads a text file (UTF8) and prints it to stdout
"""


def read_file(filename=""):
    """Takes in str filename to read it"""

    with open(filename, 'r', encoding="utf-8") as readfile:
        print(readfile.read(), end='')
