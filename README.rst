Asciize
=======

|PyPI| |Python Version| |License|

|Read the Docs| |Tests| |Codecov|

|pre-commit| |Black|

.. |PyPI| image:: https://img.shields.io/pypi/v/asciize.svg
   :target: https://pypi.org/project/asciize/
   :alt: PyPI
.. |Python Version| image:: https://img.shields.io/pypi/pyversions/asciize
   :target: https://pypi.org/project/asciize
   :alt: Python Version
.. |License| image:: https://img.shields.io/pypi/l/asciize
   :target: https://opensource.org/licenses/Apache-2.0
   :alt: License
.. |Read the Docs| image:: https://img.shields.io/readthedocs/asciize/latest.svg?label=Read%20the%20Docs
   :target: https://asciize.readthedocs.io/
   :alt: Read the documentation at https://asciize.readthedocs.io/
.. |Tests| image:: https://github.com/tomwillis608/asciize/workflows/Tests/badge.svg
   :target: https://github.com/tomwillis608/asciize/actions?workflow=Tests
   :alt: Tests
.. |Codecov| image:: https://codecov.io/gh/tomwillis608/asciize/branch/main/graph/badge.svg
   :target: https://codecov.io/gh/tomwillis608/asciize
   :alt: Codecov
.. |pre-commit| image:: https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white
   :target: https://github.com/pre-commit/pre-commit
   :alt: pre-commit
.. |Black| image:: https://img.shields.io/badge/code%20style-black-000000.svg
   :target: https://github.com/psf/black
   :alt: Black

Commentary
----------

It is a sad state to things in our IT industry in the US that we often cannot and
do not properly collect people's names in databases if their actual names include
characters outside the original 7-bit ASCII set.  Yet, with so much data collected on older systems of record, there has been a tradition in the industry to ignore accents in names in Latin characters and even to suppress capitalization.  More recently
[https://a61.asmdc.org/news/20170330-california-jose-goes-accent-mark-e-law]

NNPES blah blah

Features
--------

* TODO


Requirements
------------

* TODO


Installation
------------

You can install *Asciize* via pip_ from PyPI_:

.. code:: console

   $ pip install asciize


Usage
-----

Please see the `Command-line Reference <Usage_>`_ for details.

Simple usage
.. code-block:: console
  poetry run asciize Cañón
  Canon



Contributing
------------

Contributions are very welcome.
To learn more, see the `Contributor Guide`_.


License
-------

Distributed under the terms of the `Apache 2.0 license`_,
*Asciize* is free and open source software.


Issues
------

If you encounter any problems,
please `file an issue`_ along with a detailed description.


Credits
-------

This project was generated from `@cjolowicz`_'s `Hypermodern Python Cookiecutter`_ template.

.. _@cjolowicz: https://github.com/cjolowicz
.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _Apache 2.0 license: https://opensource.org/licenses/Apache-2.0
.. _PyPI: https://pypi.org/
.. _Hypermodern Python Cookiecutter: https://github.com/cjolowicz/cookiecutter-hypermodern-python
.. _file an issue: https://github.com/tomwillis608/asciize/issues
.. _pip: https://pip.pypa.io/
.. github-only
.. _Contributor Guide: CONTRIBUTING.rst
.. _Usage: https://asciize.readthedocs.io/en/latest/usage.html


olde README
-----------


Convert Unicode strings to nearest US ASCII equivalent by dropping accents, like an manual entries into an old ASCII name database would.


see


https://stackoverflow.com/questions/517923/what-is-the-best-way-to-remove-accents-normalize-in-a-python-unicode-string

text_to_id("Montréal, über, 12.89, Mère, Françoise, noël, 889")
>>> 'montreal_uber_1289_mere_francoise_noel_889'

José Jose
Tomáš, and Matyáš
Adéla,  and Natálie
Novák
Dvořák
Černý
Jörg
Sébastien
