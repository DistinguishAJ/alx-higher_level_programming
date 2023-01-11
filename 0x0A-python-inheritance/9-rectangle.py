#!/usr/bin/python3
"""Rectangle inherits from BaseGeometry
"""


BaseGeometry = __import__('7-base_geometry').BaseGeometry


class Rectangle(BaseGeometry):
    """Represents a rectangle data inherits from BaseGeometry
    """

    def __init__(self, width, height):
        self.integer_validator("width", width)
        self.integer_validator("height", height)
        self.__width = width
        self.__height = height

    def area(self):
        """Method that calculates area of rectangle
        """

        return self.__width * self.__height

    def __str__(self):
        """Magic method to return rectangle description
        """

        return str("[Rectangle] {}/{}".format(self.__width, self.__height))
