window.BENCHMARK_DATA = {
  "lastUpdate": 1647214369233,
  "repoUrl": "https://github.com/tomwillis608/asciize",
  "entries": {
    "Pytest-Benchmark Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "distinct": true,
          "id": "259f63c38c5549ad8e1adb74993927e7c831e28e",
          "message": "poetry dependecies for GH action",
          "timestamp": "2022-03-13T18:27:31-05:00",
          "tree_id": "e76e8166041d1c3b822838e92fb0c6caaebea63d",
          "url": "https://github.com/tomwillis608/asciize/commit/259f63c38c5549ad8e1adb74993927e7c831e28e"
        },
        "date": 1647214368795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1034196.9564986433,
            "unit": "iter/sec",
            "range": "stddev: 1.8422995888283545e-7",
            "extra": "mean: 966.9338066760323 nsec\nrounds: 68028"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 599445.6874031854,
            "unit": "iter/sec",
            "range": "stddev: 1.8523649355107894e-7",
            "extra": "mean: 1.6682078477068147 usec\nrounds: 69931"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 526220.0194099735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013635868913156699",
            "extra": "mean: 1.9003457928515424 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2288997.0659718206,
            "unit": "iter/sec",
            "range": "stddev: 3.650815738691714e-8",
            "extra": "mean: 436.8725564859157 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1333500.494665155,
            "unit": "iter/sec",
            "range": "stddev: 1.2111904186659584e-7",
            "extra": "mean: 749.9059835377881 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 613119.4436824353,
            "unit": "iter/sec",
            "range": "stddev: 2.12008286160467e-7",
            "extra": "mean: 1.6310035675820926 usec\nrounds: 96145"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 688761.5493035826,
            "unit": "iter/sec",
            "range": "stddev: 1.6711077789951342e-7",
            "extra": "mean: 1.4518812802647234 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2329497.5475781006,
            "unit": "iter/sec",
            "range": "stddev: 2.183561499064206e-8",
            "extra": "mean: 429.27712074198604 nsec\nrounds: 116280"
          }
        ]
      }
    ]
  }
}