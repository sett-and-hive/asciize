window.BENCHMARK_DATA = {
  "lastUpdate": 1647215633851,
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
      },
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
          "id": "829ba7d4ef7d379abf624f67ce6473b2b5ae364b",
          "message": "add an annotation",
          "timestamp": "2022-03-13T18:32:49-05:00",
          "tree_id": "e47f89136c35cd1bdf55918f603c86ec7bd0eafe",
          "url": "https://github.com/tomwillis608/asciize/commit/829ba7d4ef7d379abf624f67ce6473b2b5ae364b"
        },
        "date": 1647214424424,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 978289.0316401987,
            "unit": "iter/sec",
            "range": "stddev: 1.4574035234277175e-7",
            "extra": "mean: 1.0221927954394017 usec\nrounds: 61350"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 565263.468971929,
            "unit": "iter/sec",
            "range": "stddev: 1.8950766640560936e-7",
            "extra": "mean: 1.7690865497088402 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 536824.9416172482,
            "unit": "iter/sec",
            "range": "stddev: 2.5800658872625974e-7",
            "extra": "mean: 1.8628046546931714 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2342353.0713282204,
            "unit": "iter/sec",
            "range": "stddev: 2.7112522537234884e-8",
            "extra": "mean: 426.9211214314945 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1656461.6890136958,
            "unit": "iter/sec",
            "range": "stddev: 2.4362525954589636e-8",
            "extra": "mean: 603.6964251164017 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 629880.2868076721,
            "unit": "iter/sec",
            "range": "stddev: 3.0345688999902145e-7",
            "extra": "mean: 1.5876032651667034 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 702410.4702791304,
            "unit": "iter/sec",
            "range": "stddev: 1.5900873144468414e-7",
            "extra": "mean: 1.4236689831838794 usec\nrounds: 147059"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2391487.2421071446,
            "unit": "iter/sec",
            "range": "stddev: 2.252496889048703e-8",
            "extra": "mean: 418.14983680153654 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33f2a0342b362513d2c5adedb39a693dbf862a7c",
          "message": "Merge pull request #66 from tomwillis608/tom-perf-tests\n\nAdding the baseline for pytest-benchmark based performance tests on the conversion functions.",
          "timestamp": "2022-03-13T18:49:01-05:00",
          "tree_id": "f75502bed270773189fee623be15da590250a22d",
          "url": "https://github.com/tomwillis608/asciize/commit/33f2a0342b362513d2c5adedb39a693dbf862a7c"
        },
        "date": 1647215388337,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1047152.4835846528,
            "unit": "iter/sec",
            "range": "stddev: 9.548584911062547e-8",
            "extra": "mean: 954.9707570541794 nsec\nrounds: 74069"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 623999.7210090358,
            "unit": "iter/sec",
            "range": "stddev: 1.5828728101703066e-7",
            "extra": "mean: 1.602564819072282 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 546010.9308208842,
            "unit": "iter/sec",
            "range": "stddev: 2.113118490898338e-7",
            "extra": "mean: 1.8314651659016772 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2379787.835656713,
            "unit": "iter/sec",
            "range": "stddev: 2.0964352692451553e-8",
            "extra": "mean: 420.2055263149722 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1789177.4114717764,
            "unit": "iter/sec",
            "range": "stddev: 2.716755860490986e-8",
            "extra": "mean: 558.9160658905977 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 653766.875699688,
            "unit": "iter/sec",
            "range": "stddev: 3.6762730489474894e-7",
            "extra": "mean: 1.5295972267327849 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 735237.4658811651,
            "unit": "iter/sec",
            "range": "stddev: 1.6158416764512668e-7",
            "extra": "mean: 1.3601047911799804 usec\nrounds: 125001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2395404.787969225,
            "unit": "iter/sec",
            "range": "stddev: 1.6512025874892738e-8",
            "extra": "mean: 417.4659769500431 nsec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomwillis608@gmail.com",
            "name": "Tom Willis",
            "username": "tomwillis608"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "affc785d8689377471320b43ff702976204ea88d",
          "message": "Fix Benchmark badge",
          "timestamp": "2022-03-13T18:53:02-05:00",
          "tree_id": "25fe943293967c38bb073697c5b27867a3bfcebf",
          "url": "https://github.com/tomwillis608/asciize/commit/affc785d8689377471320b43ff702976204ea88d"
        },
        "date": 1647215632721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 914316.3046651189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012973903983156347",
            "extra": "mean: 1.0937134062880611 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 568837.2050079443,
            "unit": "iter/sec",
            "range": "stddev: 0.000004187600727603533",
            "extra": "mean: 1.757972212781044 usec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 502596.9244855939,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016232987225196261",
            "extra": "mean: 1.9896659754205546 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2114732.5392090967,
            "unit": "iter/sec",
            "range": "stddev: 2.571496802260834e-7",
            "extra": "mean: 472.873037823012 nsec\nrounds: 105253"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1206338.4196956253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016880321813992654",
            "extra": "mean: 828.954780576675 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 572096.3222680698,
            "unit": "iter/sec",
            "range": "stddev: 0.000007603162763132834",
            "extra": "mean: 1.7479573999628428 usec\nrounds: 100000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 643536.1848618012,
            "unit": "iter/sec",
            "range": "stddev: 0.000010015233392644785",
            "extra": "mean: 1.553914175338484 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2091264.8277726087,
            "unit": "iter/sec",
            "range": "stddev: 3.1878634491536446e-7",
            "extra": "mean: 478.1795144831692 nsec\nrounds: 36765"
          }
        ]
      }
    ]
  }
}