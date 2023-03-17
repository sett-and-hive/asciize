# Asciize

[![PyPI](https://img.shields.io/pypi/v/asciize.svg)][pypi_]
[![Status](https://img.shields.io/pypi/status/asciize.svg)][status]
[![Python Version](https://img.shields.io/pypi/pyversions/asciize)][python version]
[![License](https://img.shields.io/pypi/l/asciize)][license]

[![Read the documentation at https://asciize.readthedocs.io/](https://img.shields.io/readthedocs/asciize/latest.svg?label=Read%20the%20Docs)][read the docs]
[![Tests](https://github.com/sett.and.hive/asciize/workflows/Tests/badge.svg)][tests]
[![Codecov](https://codecov.io/gh/sett.and.hive/asciize/branch/main/graph/badge.svg)][codecov]

[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)][pre-commit]
[![Black](https://img.shields.io/badge/code%20style-black-000000.svg)][black]

[pypi_]: https://pypi.org/project/asciize/
[status]: https://pypi.org/project/asciize/
[python version]: https://pypi.org/project/asciize
[read the docs]: https://asciize.readthedocs.io/
[tests]: https://github.com/sett.and.hive/asciize/actions?workflow=Tests
[codecov]: https://app.codecov.io/gh/sett.and.hive/asciize
[pre-commit]: https://github.com/pre-commit/pre-commit
[black]: https://github.com/psf/black

It is a sad state to things in our IT industry in the US that we often cannot and
do not properly collect people's names in databases if their actual names include
characters outside the original 7-bit ASCII set.  Yet, with so much data collected on
older systems of record, there has been a tradition in the industry to ignore accents in names in Latin characters and even to suppress capitalization.  More recently
[https://a61.asmdc.org/news/20170330-california-jose-goes-accent-mark-e-law]

NNPES blah blah

Convert Unicode strings to nearest US ASCII equivalent by dropping accents, like manual entries into an old ASCII name database would.

## Features

- TODO

## Requirements

- TODO

## Installation

You can install _Asciize_ via [pip] from [PyPI]:

```console
$ pip install asciize
```

## Usage

Please see the [Command-line Reference] for details.

Simple usage
``` shell
poetry run asciize Cañón
Canon
```

## Contributing

Contributions are very welcome.
To learn more, see the [Contributor Guide].

## License

Distributed under the terms of the [Apache 2.0 license][license],
_Asciize_ is free and open source software.

## Issues

If you encounter any problems,
please [file an issue] along with a detailed description.

## Credits

This project was generated from [@cjolowicz]'s [Hypermodern Python Cookiecutter] template.

[@cjolowicz]: https://github.com/cjolowicz
[pypi]: https://pypi.org/
[hypermodern python cookiecutter]: https://github.com/cjolowicz/cookiecutter-hypermodern-python
[file an issue]: https://github.com/sett.and.hive/asciize/issues
[pip]: https://pip.pypa.io/

<!-- github-only -->

[license]: https://github.com/sett.and.hive/asciize/blob/main/LICENSE
[contributor guide]: https://github.com/sett.and.hive/asciize/blob/main/CONTRIBUTING.md
[command-line reference]: https://asciize.readthedocs.io/en/latest/usage.html


## olde README

see:

https://stackoverflow.com/questions/517923/what-is-the-best-way-to-remove-accents-normalize-in-a-python-unicode-string

text_to_id("Montréal, über, 12.89, Mère, Françoise, noël, 889")

'montreal_uber_1289_mere_francoise_noel_889'

José Jose
Tomáš, and Matyáš
Adéla,  and Natálie
Novák
Dvořák
Černý
Jörg
Sébastien
