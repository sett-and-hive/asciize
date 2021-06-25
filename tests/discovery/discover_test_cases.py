"""Use Faker to generate text (names) to visually test asciize to 
discover missing test cases.

This is an exploratory testing tool.
"""

from faker import Faker

from asciize.entities.convert_character import character_coversion

# import click


# @click.command()
# @click.version_option()
def setup():
    return


def discovery(outfile):
    locale_list = [
        "de-CH",
        "de-AT",
        "en-PH",
        "fr-FR",
        "es",
        "ga-IE",
        "hu-HU",
        "no_NO",
        "pt_BR",
        "pt_pt",
        "cs-CZ",
        "fi-FI",
    ]
    fake = Faker(locale_list)
    ofile = open(outfile, "w")
    # while True is True:
    try:
        while True:
            fname = fake.name()
            print(fname)
            aname = character_coversion(fname)
            print(aname)
            # print(f" {fname} -- {aname}")
            key_input = str(input("Capture for test?\n"))
            print(key_input)
            if key_input.upper() == "Y":
                print("*saving*")
                ofile.write(f"{fname}\n")
    except KeyboardInterrupt:
        print("interrupted!")
    ofile.close()


def auto_discovery(outfile):
    attempts = 100000000
    locale_list = [
        "cs-CZ",
        "da-DK",
        "de",
        "de-CH",
        "de-AT",
        "en-PH",
        "fi-FI",
        "fr-FR",
        "es",
        "et-EE",
        "ga-IE",
        "hu-HU",
        "lb-LU",
        "lt-LT",
        "lv-LV",
        "mt-MT",
        "nl-BE",
        "nl-NL",
        "no_NO",
        "pl-PL",
        "pt_BR",
        "pt_PT",
        "ro-RO",
        "sk-SK",
        "sl-SI",
        "sv-SE",
    ]
    fake = Faker(locale_list)
    ofile = open(outfile, "w")
    # while True is True:
    try:
        for i in range(attempts):
            fname = fake.name()
            # print(fname)
            aname = character_coversion(fname)
            # print(aname)
            print(f" {fname} --> {aname}")
            # key_input = str(input("Capture for test?\n"))
            # print(key_input)

            if not aname.isascii():
                print("*saving*")
                ofile.write(f"{fname}\n")
    except KeyboardInterrupt:
        print("interrupted!")
    ofile.close()


# Replace maual reiew with this
# 1. convert
# 2. did conversion leave any non-ascii charaters?
# 3. if yes, capture and log


if __name__ == "__main__":  # pragma: no cover
    # setup()
    outfile = "discovery.txt"
    auto_discovery(outfile)
