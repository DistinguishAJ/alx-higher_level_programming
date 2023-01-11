#!/usr/bin/python3
"""Function that returns an object (Python data structure) repres
ented by a JSON string
"""

import json


def from_json_string(my_str):
    """Returns a python object represented by a JSON string
    """

    return json.loads(my_str)
