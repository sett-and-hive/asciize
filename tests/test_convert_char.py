"""Test coversion of unicode character into base ASCII Latin character."""

from asciize.entities.convert_character import character_conversion


def test_char_converson() -> None:
    """Test Americanizing character conversion."""
    tests = [
        ["José", "Jose"],
        ["Cañón", "Canon"],
        # Common accents on Latin characters
        # http://www.madore.org/~david/misc/unitest/#accents
        # a
        ["à", "a"],
        ["á", "a"],
        ["â", "a"],
        ["ã", "a"],
        ["ä", "a"],
        ["ā", "a"],
        ["ă", "a"],
        ["ą", "a"],
        ["ȧ", "a"],
        ["ǎ", "a"],
        ["ȁ", "a"],
        ["ȃ", "a"],
        # e
        ["è", "e"],
        ["é", "e"],
        ["ê", "e"],
        ["ẽ", "e"],
        ["ë", "e"],
        ["ē", "e"],
        ["ĕ", "e"],
        ["ę", "e"],
        ["ė", "e"],
        ["ě", "e"],
        ["ȅ", "e"],
        ["ȇ", "e"],
        # i
        ["ì", "i"],
        ["í", "i"],
        ["î", "i"],
        ["ĩ", "i"],
        ["ï", "i"],
        ["ī", "i"],
        ["ĭ", "i"],
        ["į", "i"],
        ["i", "i"],
        ["ǐ", "i"],
        ["ȉ", "i"],
        ["ȋ", "i"],
        # o
        ["ò", "o"],
        ["ó", "o"],
        ["ô", "o"],
        ["õ", "o"],
        ["ö", "o"],
        ["ō", "o"],
        ["ŏ", "o"],
        ["ǫ", "o"],
        ["ȯ", "o"],
        ["ő", "o"],
        ["ǒ", "o"],
        ["ȍ", "o"],
        ["ȏ", "o"],
        # u
        ["ù", "u"],
        ["ú", "u"],
        ["û", "u"],
        ["ũ", "u"],
        ["ü", "u"],
        ["ū", "u"],
        ["ŭ", "u"],
        ["ų", "u"],
        ["ű", "u"],
        ["ǔ", "u"],
        ["ȕ", "u"],
        ["ȗ", "u"],
        ["ū", "u"],
        # y
        ["ỳ", "y"],
        ["ý", "y"],
        ["ŷ", "y"],
        ["ỹ", "y"],
        ["ÿ", "y"],
        ["ȳ", "y"],
        ["ẏ", "y"],
        # harder
        ["ø", "o"],
        ["ø", "o"],
        # consonants
        ["ç", "c"],
        ["č", "c"],
        ["ģ", "g"],
        ["ķ", "k"],
        ["ļ", "l"],
        ["ł", "l"],
        ["ĺ", "l"],
        ["ņ", "n"],
        ["ń", "n"],
        ["ñ", "n"],
        ["ṛ", "r"],
        ["ŕ", "r"],
        ["š", "s"],
        ["ť", "t"],
        ["ŵ", "w"],
        ["ẅ", "w"],
        ["ẃ", "w"],
        ["ẁ", "w"],
        ["ž", "z"],
        ["ź", "z"],
        ["ż", "z"],
        ["ß", "ss"],
        ["ẞ", "SS"],
        ["æ", "ae"],
        [" ", " "],
        # Synthetic Czech/Norweian/Polish name
        ["Øldřichß, Špłačæk", "Oldrichss, Splacaek"],
        # Non-Latin
        ["英語", ""],
        ["Tiger虎", "Tiger"],
    ]

    for input, expected in tests:
        print(f"In /{input}/ Test /{expected}/")
        output = character_conversion(input)
        assert output == expected
