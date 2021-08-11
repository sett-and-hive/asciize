"""Command-line interface."""
import click
from asciize.entities.convert_character import character_conversion  # type: ignore


@click.command()
@click.version_option()
# @click.option("-f", "--file", required=False, help="File to asciize. Not implemented")
@click.argument("string_argument", nargs=-1)  # String to asciize
def main(string_argument) -> None:
    """Asciize a string from the command line."""
    if len(string_argument):  # clean this up later
        result = character_conversion(str(string_argument[0]))
        print(result)
    else:
        _print_help()


def _print_help():
    ctx = click.get_current_context()
    click.echo(ctx.get_help())
    ctx.exit()


if __name__ == "__main__":
    main(prog_name="asciize")  # pragma: no cover
