"""Domain entity for coversion of unicode into base ASCII Latin characters."""

import unicodedata


def remove_accents(input_str: str) -> str:
    """Remove accents from unicode string, return unicode string.

    [https://stackoverflow.com/questions/517923/what-is-the-best-way-to-remove-accents-normalize-in-a-python-unicode-string]
    """
    nfkd = unicodedata.normalize("NFKD", input_str)
    return "".join([c for c in nfkd if not unicodedata.combining(c)])


def convert_single_latins(input_string: str) -> str:
    """Convert other characters that are based on single Latin characters.

    Ø LATIN SMALL LETTER O WITH STROKE
    ł LATIN SMALL LETTER L WITH STROKE

    https://stackoverflow.com/questions/8935111/translating-letters-not-in-7bit-ascii-to-ascii-like-%C5%84-to-n-and-%C4%85-to-a

    What happens to non-Latin-based characters in unknown at this time.
    """

    def base_single_char(c: str) -> str:
        try:
            name = unicodedata.name(c)
            name = name[: name.index(" WITH")]
            return unicodedata.lookup(name)
        except (ValueError, KeyError):
            return c

    return "".join([base_single_char(c) for c in input_string])


def convert_multiple_latins(input_string: str) -> str:
    """Convert other characters that are based on multiple Latin characters.

    /ẞ/ (7838) LATIN CAPITAL LETTER SHARP S
    /æ/ (230) LATIN SMALL LETTER AE

    What happens to non-Latin-based characters in unknown at this time.
    """

    def base_multi_char(c: str) -> str:
        try:
            name = unicodedata.name(c)
            chars = name.split()[-1]
            if "LATIN" not in name:
                raise ValueError
            if "SHARP" in name:
                chars = "".join([ch * 2 for ch in chars])
            if "SMALL" in name:
                chars = chars.lower()
            return chars
        except (ValueError, KeyError):
            return c

    return "".join([base_multi_char(c) for c in input_string])


def direct_remove(input_string: str) -> str:
    """Strip out any non-ASCII characters like 語."""
    return "".join([c for c in input_string if c.isascii()])


def character_conversion(input_character: str) -> str:
    """Apply conversions. Expects byte string."""
    retval = remove_accents(input_character)
    if not retval.isascii():
        retval = convert_single_latins(retval)
    if not retval.isascii():
        retval = convert_multiple_latins(retval)
    if not retval.isascii():
        retval = direct_remove(retval)
    return retval
