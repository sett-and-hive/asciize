"""Domain entity for coversion of unicode character into base ASCII Latin character."""


import unicodedata


def remove_accents(input_str):
    """Remove accents from unicode string, return unicode string.

    TODO:
    * Eivind Næss
    * Stine Ødegård

    [https://stackoverflow.com/questions/517923/what-is-the-best-way-to-remove-accents-normalize-in-a-python-unicode-string]
    """
    nfkd_form = unicodedata.normalize("NFKD", input_str)
    return u"".join([c for c in nfkd_form if not unicodedata.combining(c)])


def character_coversion(input_character):
    """Expects byte string."""
    return remove_accents(input_character)
