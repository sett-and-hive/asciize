"""Command-line interface."""

from typing import Any

import click

from asciize.entities.convert_character import character_conversion


@click.command()
@click.version_option()
# @click.option("-f", "--file", required=False, help="File to asciize. Not implemented")
@click.argument("string_argument", nargs=-1)  # String to asciize
def main(string_argument: Any) -> None:
    """Asciize a string from the command line."""
    if not string_argument:
        _print_help()
    else:
        result = character_conversion(str(string_argument[0]))
        print(result)


def _print_help() -> None:
    ctx = click.get_current_context()
    click.echo(ctx.get_help())
    ctx.exit()


if __name__ == "__main__":
    main(prog_name="asciize")  # pragma: no cover
