"""Domain entity for coversion of unicode character into base ASCII Latin character."""


import unicodedata


def remove_accents(input_str):
    """Remove accents from unicode string, return unicode string.

    TODO:
    * Eivind Næss
    * Stine Ødegård

    [https://stackoverflow.com/questions/517923/what-is-the-best-way-to-remove-accents-normalize-in-a-python-unicode-string]
    """
    nfkd = unicodedata.normalize("NFKD", input_str)
    return "".join([c for c in nfkd if not unicodedata.combining(c)])


def convert_single_latins(input_string):
    """Convert other single character unicode characters based on single Latin characters.
    Ø LATIN SMALL LETTER O WITH STROKE
    ł LATIN SMALL LETTER L WITH STROKE

    https://stackoverflow.com/questions/8935111/translating-letters-not-in-7bit-ascii-to-ascii-like-%C5%84-to-n-and-%C4%85-to-a

    What happens to non-Latin-based characters in unknown at this time.
    """
    def base_single_char(c):
        try:
            name = unicodedata.name(c)
            name = name[:name.index(' WITH')]
            return unicodedata.lookup(name)
        #print (unicodedata.lookup(cname))
        except (ValueError, KeyError):
            return c
    
    return "".join([base_single_char(c) for c in input_string])


def direct_remove(input_string):
    return input_string
    
def character_coversion(input_character):
    """Expects byte string."""
    retval = remove_accents(input_character)
    if not retval.isascii():
        retval = convert_single_latins(retval)
    if not retval.isascii():
        retval = direct_remove(retval)
    return retval
