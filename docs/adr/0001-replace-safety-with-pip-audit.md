# ADR 0001: Replace Safety with pip-audit for Dependency Vulnerability Scanning

## Status

Accepted

## Date

2026-03-09

## Context

The project used [Safety](https://pypi.org/project/safety/) to scan Python dependencies
for known security vulnerabilities. Safety is run as a Nox session and was listed as a
development dependency.

Safety changed its licensing model, requiring a commercial account for full access to
its vulnerability database. This caused CI pipeline failures because unauthenticated
runs began returning errors instead of scan results. See also:
[flexion/devops-deployment-metrics#695](https://github.com/flexion/devops-deployment-metrics/issues/695).

## Decision

Replace Safety with [pip-audit](https://pypi.org/project/pip-audit/), maintained by
the Python Packaging Authority (PyPA).

pip-audit:

- Is fully open-source (Apache-2.0 licensed) with no commercial account required.
- Uses the [OSV (Open Source Vulnerabilities)](https://osv.dev/) database maintained
  by Google, as well as the PyPI Advisory Database, providing comprehensive and
  up-to-date vulnerability data.
- Accepts a `--requirement` flag to audit a requirements file exported by Poetry,
  matching the existing workflow.
- Is actively maintained by the PyPA and widely adopted in the Python community.

Changes made:

- Replaced the `safety` Nox session with a `pip-audit` session in `noxfile.py`.
- Replaced the `safety` dev dependency with `pip-audit` in `pyproject.toml`.
- Removed `.safety-policy.yml` (Safety-specific configuration, no longer needed).
- Updated the CI workflow (`tests.yml`) allowed egress endpoints: removed `pyup.io`
  (Safety's vulnerability database backend) and added `api.osv.dev` (pip-audit's
  OSV backend).

## Consequences

- CI dependency vulnerability scans will succeed without requiring a commercial Safety
  account or API key.
- The OSV database used by pip-audit is publicly accessible and continuously updated.
- The `.safety-policy.yml` file and any CVE ignore rules it contained are no longer
  applied. Vulnerability exceptions should be managed via pip-audit's `--ignore-vuln`
  flag or a `pyproject.toml` configuration if needed in the future.
