#!/usr/bin/python3
"""Function that writes an Object to a text file, using a JSON re
presentation.
"""

import json


def save_to_json_file(my_obj, filename):
    """Writes an object to a text file, using JSON
    """

    with open(filename, "w", encoding="utf-8") as saveFile:
        json.dump(my_obj, saveFile)
