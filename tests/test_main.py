"""Test cases for the __main__ module."""
import pytest
from asciize import __main__
from click.testing import CliRunner


@pytest.fixture
def runner() -> CliRunner:
    """Fixture for invoking command-line interfaces."""
    return CliRunner()


def test_main_succeeds_no_arg(runner: CliRunner) -> None:
    """It exits with a status code of zero for no arguments."""
    result = runner.invoke(__main__.main)
    assert result.exit_code == 0
    assert "Usage:" in result.output


def test_main_succeeds_with_arg(runner: CliRunner) -> None:
    """It exits with a status code of zero for one argument."""
    ASCII_VALUE = "TW"
    result = runner.invoke(__main__.main, [ASCII_VALUE])
    assert result.exit_code == 0
    assert ASCII_VALUE in result.output
