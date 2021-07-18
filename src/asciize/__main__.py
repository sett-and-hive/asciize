"""Command-line interface."""
import click


@click.command()
@click.version_option()
def main() -> None:
    """Asciize."""


if __name__ == "__main__":
    main(prog_name="asciize")  # pragma: no cover
