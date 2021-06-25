"""char_util"""

import unicodedata


def discovery(tests):
    """Input a list of strings and reveal unicode details."""
    for test in tests:
        print(f"Testing /{test}/")
        for c in test:
            uni = unicodedata.name(c)
            print(f"/{c}/ {uni}")
            nfkd_form = unicodedata.normalize("NFKD", c)
            for c1 in nfkd_form:
                combo = unicodedata.combining(c1)
                print(f"combo /{c1}/ {combo}")
                decomp = unicodedata.decomposition(c1)
                print(f"decomp /{c1}/ {decomp}")


if __name__ == "__main__":  # pragma: no cover
    # setup()
    tests = [
        "ł",
        "ø",
        "ß",
        "ü",
        "ȕ",
        "à",
        "á",
        "â",
        "ã",
        "ä",
        "ó",
        "æ",
        "å",
    ]
    discovery(tests)
