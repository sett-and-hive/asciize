window.BENCHMARK_DATA = {
  "lastUpdate": 1654892673677,
  "repoUrl": "https://github.com/sett-and-hive/asciize",
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
          "id": "8105707149a17f14d212d2e0fec979f6dd36de71",
          "message": "Fix benchmark badge",
          "timestamp": "2022-03-13T18:54:32-05:00",
          "tree_id": "6e18b1daeb157df2451cac3d9c6f9662be09f23f",
          "url": "https://github.com/tomwillis608/asciize/commit/8105707149a17f14d212d2e0fec979f6dd36de71"
        },
        "date": 1647215729139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 792866.5800279243,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022477027621156354",
            "extra": "mean: 1.261246248977704 usec\nrounds: 67115"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 467413.8254258442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035189345431930434",
            "extra": "mean: 2.139431795987069 usec\nrounds: 75758"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 405836.1077020667,
            "unit": "iter/sec",
            "range": "stddev: 0.000018227213572468172",
            "extra": "mean: 2.464048863621869 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1734849.420351801,
            "unit": "iter/sec",
            "range": "stddev: 8.490231172349499e-7",
            "extra": "mean: 576.4189031443468 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1028382.2550568157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019480662058798476",
            "extra": "mean: 972.4010649568747 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 494797.65665278747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027919006759029358",
            "extra": "mean: 2.021028164855935 usec\nrounds: 23753"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 543184.5871733767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062570454576010914",
            "extra": "mean: 1.8409947992151228 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1739077.428986663,
            "unit": "iter/sec",
            "range": "stddev: 4.374346488939404e-7",
            "extra": "mean: 575.0175255752779 nsec\nrounds: 90910"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "eb846a9410c82408b5bbbe6eaf8c7dc4812e9ada",
          "message": "Lock file maintenance",
          "timestamp": "2022-03-14T04:50:18Z",
          "tree_id": "1e56ec0256f108a56ee224a32456fe4b7fb9b8b9",
          "url": "https://github.com/tomwillis608/asciize/commit/eb846a9410c82408b5bbbe6eaf8c7dc4812e9ada"
        },
        "date": 1647233471581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 996039.6553447007,
            "unit": "iter/sec",
            "range": "stddev: 9.430793074976135e-8",
            "extra": "mean: 1.003976091347416 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 590408.231871659,
            "unit": "iter/sec",
            "range": "stddev: 2.754624353734677e-7",
            "extra": "mean: 1.69374332202295 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 538267.7525789872,
            "unit": "iter/sec",
            "range": "stddev: 1.599790301569e-7",
            "extra": "mean: 1.8578114613196277 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2395236.2893658965,
            "unit": "iter/sec",
            "range": "stddev: 1.527336752544012e-8",
            "extra": "mean: 417.4953445887555 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1717500.211232499,
            "unit": "iter/sec",
            "range": "stddev: 3.9567012466139115e-8",
            "extra": "mean: 582.2415586675343 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 620884.9399343788,
            "unit": "iter/sec",
            "range": "stddev: 1.2701528883448388e-7",
            "extra": "mean: 1.6106043739854436 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 697408.6650478394,
            "unit": "iter/sec",
            "range": "stddev: 1.3929246130181394e-7",
            "extra": "mean: 1.4338795173005257 usec\nrounds: 120482"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2325243.2077020807,
            "unit": "iter/sec",
            "range": "stddev: 1.5462143724360195e-8",
            "extra": "mean: 430.0625399906526 nsec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "3b9fce699ac01149ce335b43fa405f808dddb5a5",
          "message": "Update dependency mypy to ^0.941",
          "timestamp": "2022-03-14T22:22:33Z",
          "tree_id": "07d7de4976e26ea8e20d410c9c26b3764daf7508",
          "url": "https://github.com/tomwillis608/asciize/commit/3b9fce699ac01149ce335b43fa405f808dddb5a5"
        },
        "date": 1647296600915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1169783.3904851421,
            "unit": "iter/sec",
            "range": "stddev: 3.6818853804160944e-7",
            "extra": "mean: 854.8591201874322 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 686781.4259051975,
            "unit": "iter/sec",
            "range": "stddev: 4.5242270169196914e-7",
            "extra": "mean: 1.4560673342060342 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 613091.5415727413,
            "unit": "iter/sec",
            "range": "stddev: 3.5568957021062666e-7",
            "extra": "mean: 1.63107779538882 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2630700.7996058143,
            "unit": "iter/sec",
            "range": "stddev: 5.677484293347232e-8",
            "extra": "mean: 380.1268468651161 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1508346.9914254353,
            "unit": "iter/sec",
            "range": "stddev: 3.105273587975814e-7",
            "extra": "mean: 662.9774220950105 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 739252.6647903529,
            "unit": "iter/sec",
            "range": "stddev: 4.765951010249887e-7",
            "extra": "mean: 1.35271747756715 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 825055.1896935909,
            "unit": "iter/sec",
            "range": "stddev: 4.37349096215089e-7",
            "extra": "mean: 1.212040130759471 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2766529.2959263995,
            "unit": "iter/sec",
            "range": "stddev: 5.745337002318405e-8",
            "extra": "mean: 361.463730556774 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "ca98c20329827ed8f3e0be14fbe3b9cfedb49163",
          "message": "Lock file maintenance",
          "timestamp": "2022-03-21T03:43:41Z",
          "tree_id": "9312f8b591694f259b7d487eadaa4888be78f091",
          "url": "https://github.com/tomwillis608/asciize/commit/ca98c20329827ed8f3e0be14fbe3b9cfedb49163"
        },
        "date": 1647834277232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 867564.1548787667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020934487818917215",
            "extra": "mean: 1.1526525091850295 usec\nrounds: 32680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 516114.8737332314,
            "unit": "iter/sec",
            "range": "stddev: 0.000004595704263865425",
            "extra": "mean: 1.937553151232914 usec\nrounds: 90901"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 441332.404767687,
            "unit": "iter/sec",
            "range": "stddev: 0.000006381438389392466",
            "extra": "mean: 2.2658657945735707 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1974708.4500010104,
            "unit": "iter/sec",
            "range": "stddev: 6.777964076099465e-7",
            "extra": "mean: 506.4038693912269 nsec\nrounds: 39063"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1472863.0199186902,
            "unit": "iter/sec",
            "range": "stddev: 0.000001894816915150632",
            "extra": "mean: 678.9497641505451 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 525085.1296448531,
            "unit": "iter/sec",
            "range": "stddev: 0.000016755170831800587",
            "extra": "mean: 1.904453094446534 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 595361.1895071109,
            "unit": "iter/sec",
            "range": "stddev: 0.000026482458616064445",
            "extra": "mean: 1.6796526505664278 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1966804.0186678257,
            "unit": "iter/sec",
            "range": "stddev: 6.814835178628166e-7",
            "extra": "mean: 508.43906688634536 nsec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "bc8081ee80274d02aa8e71c8fef41c3c7c778f8c",
          "message": "Update dependency xdoctest to v1",
          "timestamp": "2022-03-25T22:37:23Z",
          "tree_id": "b159800797688dd6e5f89af986378ef781a16b73",
          "url": "https://github.com/tomwillis608/asciize/commit/bc8081ee80274d02aa8e71c8fef41c3c7c778f8c"
        },
        "date": 1648247895749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1203899.597170371,
            "unit": "iter/sec",
            "range": "stddev: 1.7023442480177096e-7",
            "extra": "mean: 830.634051502622 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 687846.1238988853,
            "unit": "iter/sec",
            "range": "stddev: 2.0620228514125729e-7",
            "extra": "mean: 1.4538135278450763 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 599567.949837947,
            "unit": "iter/sec",
            "range": "stddev: 2.4569145429274465e-7",
            "extra": "mean: 1.6678676708291076 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2687891.803681323,
            "unit": "iter/sec",
            "range": "stddev: 6.555900978163988e-8",
            "extra": "mean: 372.03878468299723 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 2005379.8908265813,
            "unit": "iter/sec",
            "range": "stddev: 4.9957525332906104e-8",
            "extra": "mean: 498.6586354906703 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 717677.9519389822,
            "unit": "iter/sec",
            "range": "stddev: 4.4099590525848525e-7",
            "extra": "mean: 1.3933826409161043 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 813835.8925184805,
            "unit": "iter/sec",
            "range": "stddev: 2.7105860782408065e-7",
            "extra": "mean: 1.228748951960597 usec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2703501.8689742535,
            "unit": "iter/sec",
            "range": "stddev: 3.878873831574672e-8",
            "extra": "mean: 369.8906264786163 nsec\nrounds: 135136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "d0ed1693c200983a84cd07264bcb7357e1571cf7",
          "message": "Update dependency mypy to ^0.942",
          "timestamp": "2022-03-26T01:37:10Z",
          "tree_id": "fed03d4a50b83ce4aad2738364dd7059d6496ad0",
          "url": "https://github.com/tomwillis608/asciize/commit/d0ed1693c200983a84cd07264bcb7357e1571cf7"
        },
        "date": 1648258677980,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1151281.9067053844,
            "unit": "iter/sec",
            "range": "stddev: 1.1824520561065733e-7",
            "extra": "mean: 868.5969910373153 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 671856.0917653006,
            "unit": "iter/sec",
            "range": "stddev: 1.446023839679934e-7",
            "extra": "mean: 1.488413980697119 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 608525.591117374,
            "unit": "iter/sec",
            "range": "stddev: 1.9899129253217165e-7",
            "extra": "mean: 1.6433162624497044 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2683801.990939237,
            "unit": "iter/sec",
            "range": "stddev: 1.6024161032615818e-8",
            "extra": "mean: 372.6057299968044 nsec\nrounds: 133316"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 2022125.8349719308,
            "unit": "iter/sec",
            "range": "stddev: 2.06724270212956e-8",
            "extra": "mean: 494.52906575109455 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 720591.7575292032,
            "unit": "iter/sec",
            "range": "stddev: 1.3611438152116273e-7",
            "extra": "mean: 1.387748318727436 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 805006.2937447507,
            "unit": "iter/sec",
            "range": "stddev: 1.740229861117431e-7",
            "extra": "mean: 1.242226312726292 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2588938.946892895,
            "unit": "iter/sec",
            "range": "stddev: 2.9270655673942172e-8",
            "extra": "mean: 386.25862583587804 nsec\nrounds: 124985"
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
          "id": "2fa9a89b1e1f7cbbbc30d22849a35b3354a87201",
          "message": "Merge pull request #69 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-03-26T11:34:45-05:00",
          "tree_id": "bfffb9e249624374640124973a3f00c8923c5910",
          "url": "https://github.com/tomwillis608/asciize/commit/2fa9a89b1e1f7cbbbc30d22849a35b3354a87201"
        },
        "date": 1648312587106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 830140.4380860518,
            "unit": "iter/sec",
            "range": "stddev: 0.000002651024888478438",
            "extra": "mean: 1.2046154531461828 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 522094.60552348354,
            "unit": "iter/sec",
            "range": "stddev: 0.000005228022970203298",
            "extra": "mean: 1.9153616785550573 usec\nrounds: 72993"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 444409.85364230286,
            "unit": "iter/sec",
            "range": "stddev: 0.000021886542585812868",
            "extra": "mean: 2.2501751295660544 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1912222.5763026662,
            "unit": "iter/sec",
            "range": "stddev: 4.878627869141871e-7",
            "extra": "mean: 522.9516753920137 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1383173.6281134703,
            "unit": "iter/sec",
            "range": "stddev: 9.673440230458067e-7",
            "extra": "mean: 722.9750334119906 nsec\nrounds: 33671"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 549949.0448694673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030448264509045673",
            "extra": "mean: 1.8183502805016312 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 591972.8580578042,
            "unit": "iter/sec",
            "range": "stddev: 0.000008356632428868099",
            "extra": "mean: 1.6892666384754305 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1917318.3059764109,
            "unit": "iter/sec",
            "range": "stddev: 7.590743647669404e-7",
            "extra": "mean: 521.5618068648789 nsec\nrounds: 106383"
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
          "id": "71a728ea32ee57b2c32f7006a2bf60b637f715e6",
          "message": "Merge pull request #76 from tomwillis608/issue-75-secret-scan\n\nissue-75 Add action for detect-secrets",
          "timestamp": "2022-03-27T23:29:52-05:00",
          "tree_id": "6d555a735d12a7ddbbd26152fe5247171352fd67",
          "url": "https://github.com/tomwillis608/asciize/commit/71a728ea32ee57b2c32f7006a2bf60b637f715e6"
        },
        "date": 1648441844596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 897382.4387482654,
            "unit": "iter/sec",
            "range": "stddev: 3.77635450383958e-7",
            "extra": "mean: 1.1143520942920089 usec\nrounds: 81961"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 519423.6390522897,
            "unit": "iter/sec",
            "range": "stddev: 5.340860284152403e-7",
            "extra": "mean: 1.9252108006184356 usec\nrounds: 77514"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 465085.0426718109,
            "unit": "iter/sec",
            "range": "stddev: 6.614876864578047e-7",
            "extra": "mean: 2.150144399947203 usec\nrounds: 81295"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2013635.0836150006,
            "unit": "iter/sec",
            "range": "stddev: 1.1352262896570245e-7",
            "extra": "mean: 496.6143111712927 nsec\nrounds: 97078"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1510182.7265775062,
            "unit": "iter/sec",
            "range": "stddev: 6.038161737229968e-8",
            "extra": "mean: 662.1715256050088 nsec\nrounds: 79359"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 558492.5474416325,
            "unit": "iter/sec",
            "range": "stddev: 4.889979972114287e-7",
            "extra": "mean: 1.790534188111989 usec\nrounds: 101000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 617367.3341850381,
            "unit": "iter/sec",
            "range": "stddev: 4.5170702279315854e-7",
            "extra": "mean: 1.6197811977208998 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2065792.1011942858,
            "unit": "iter/sec",
            "range": "stddev: 5.82136529174064e-8",
            "extra": "mean: 484.0758174173597 nsec\nrounds: 99001"
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
          "id": "82977d5a5ebeb85aefdb7f22497119cf7fda0c2c",
          "message": "Merge pull request #74 from tomwillis608/renovate/lock-file-maintenance\n\nLock file maintenance",
          "timestamp": "2022-03-27T23:35:47-05:00",
          "tree_id": "adea80cef36e86bf85c168051ab3107fb3dc1fda",
          "url": "https://github.com/tomwillis608/asciize/commit/82977d5a5ebeb85aefdb7f22497119cf7fda0c2c"
        },
        "date": 1648442233001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 811978.3142174075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011718338030570731",
            "extra": "mean: 1.2315599844114182 usec\nrounds: 56498"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 490602.0385460817,
            "unit": "iter/sec",
            "range": "stddev: 0.000002093004256410596",
            "extra": "mean: 2.0383119543562005 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 429802.7027638605,
            "unit": "iter/sec",
            "range": "stddev: 0.000002104359970955609",
            "extra": "mean: 2.3266489334977813 usec\nrounds: 85471"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1780373.2886596788,
            "unit": "iter/sec",
            "range": "stddev: 5.494064688081899e-7",
            "extra": "mean: 561.679961371049 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1029057.7333340357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019777273575420627",
            "extra": "mean: 971.7627763800076 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 489228.04489740287,
            "unit": "iter/sec",
            "range": "stddev: 0.000003772355237806955",
            "extra": "mean: 2.0440365396667155 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 551502.6079953887,
            "unit": "iter/sec",
            "range": "stddev: 0.000002532887197466303",
            "extra": "mean: 1.8132280527825924 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1747133.407891404,
            "unit": "iter/sec",
            "range": "stddev: 4.206345766817858e-7",
            "extra": "mean: 572.3661372872208 nsec\nrounds: 98040"
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
          "id": "52d59199c70da007b27a6a493d51d2b198a5b6cb",
          "message": "Merge pull request #73 from tomwillis608/renovate/sphinx-4.x\n\nUpdate dependency sphinx to v4.5.0",
          "timestamp": "2022-03-27T23:40:27-05:00",
          "tree_id": "a07e8e4bac9384f7695f99d33bc5e237b016699a",
          "url": "https://github.com/tomwillis608/asciize/commit/52d59199c70da007b27a6a493d51d2b198a5b6cb"
        },
        "date": 1648442477964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 918159.4901578459,
            "unit": "iter/sec",
            "range": "stddev: 0.000010850703051646088",
            "extra": "mean: 1.0891353961043135 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 615296.4895768428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017319101595229217",
            "extra": "mean: 1.6252327405406277 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 533952.4165133554,
            "unit": "iter/sec",
            "range": "stddev: 0.00000822676294853918",
            "extra": "mean: 1.8728260591643706 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2376266.370442559,
            "unit": "iter/sec",
            "range": "stddev: 5.040876630449084e-7",
            "extra": "mean: 420.8282423377444 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1572670.084808414,
            "unit": "iter/sec",
            "range": "stddev: 6.440640872269929e-7",
            "extra": "mean: 635.8612716420881 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 658618.6803720058,
            "unit": "iter/sec",
            "range": "stddev: 0.000002261783877456926",
            "extra": "mean: 1.5183292393637737 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 673886.4521348123,
            "unit": "iter/sec",
            "range": "stddev: 0.000003121805466268823",
            "extra": "mean: 1.4839295208148036 usec\nrounds: 153847"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2329681.233510776,
            "unit": "iter/sec",
            "range": "stddev: 6.511233810775211e-7",
            "extra": "mean: 429.24327397928585 nsec\nrounds: 126583"
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
          "id": "edd08bbe8484517610004ad3c9d791ca7962eb85",
          "message": "Merge pull request #77 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-03-28T20:16:49-05:00",
          "tree_id": "97205f57cef28c12c5547dab56432b3108824ecf",
          "url": "https://github.com/tomwillis608/asciize/commit/edd08bbe8484517610004ad3c9d791ca7962eb85"
        },
        "date": 1648516656231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1190585.3195944387,
            "unit": "iter/sec",
            "range": "stddev: 3.3615721998931896e-7",
            "extra": "mean: 839.9230055521266 nsec\nrounds: 68966"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 628095.5694257726,
            "unit": "iter/sec",
            "range": "stddev: 5.688278656603569e-7",
            "extra": "mean: 1.5921143989508408 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 587822.9821308703,
            "unit": "iter/sec",
            "range": "stddev: 5.63704932505805e-7",
            "extra": "mean: 1.7011924174433934 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2594961.859748361,
            "unit": "iter/sec",
            "range": "stddev: 7.743944823796098e-8",
            "extra": "mean: 385.36211861600583 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1527895.5851842295,
            "unit": "iter/sec",
            "range": "stddev: 3.049023015596243e-7",
            "extra": "mean: 654.4949862391431 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 740658.1177823747,
            "unit": "iter/sec",
            "range": "stddev: 4.2146450159484804e-7",
            "extra": "mean: 1.3501505971393768 usec\nrounds: 103083"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 791484.3108152305,
            "unit": "iter/sec",
            "range": "stddev: 4.5594569800229553e-7",
            "extra": "mean: 1.263448922910421 usec\nrounds: 140846"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2557402.4904881436,
            "unit": "iter/sec",
            "range": "stddev: 9.900266011203959e-8",
            "extra": "mean: 391.02175106161394 nsec\nrounds: 140846"
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
          "id": "ba199e8769113f233fefbfacb7c4883a735334a4",
          "message": "Merge pull request #78 from tomwillis608/renovate/codecov-codecov-action-3.x\n\nUpdate codecov/codecov-action action to v3",
          "timestamp": "2022-04-21T15:56:06-05:00",
          "tree_id": "bc29bf710a1b8ba2c2b70f70bc7c4f34317e5392",
          "url": "https://github.com/tomwillis608/asciize/commit/ba199e8769113f233fefbfacb7c4883a735334a4"
        },
        "date": 1650574620277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1007019.4247319907,
            "unit": "iter/sec",
            "range": "stddev: 1.1685014702552723e-7",
            "extra": "mean: 993.0295041390499 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 586403.3087869487,
            "unit": "iter/sec",
            "range": "stddev: 1.8403043112237777e-7",
            "extra": "mean: 1.7053109779831048 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 541508.1195889389,
            "unit": "iter/sec",
            "range": "stddev: 2.945032034285218e-7",
            "extra": "mean: 1.8466943778407314 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2366081.373772027,
            "unit": "iter/sec",
            "range": "stddev: 2.0561909934082374e-8",
            "extra": "mean: 422.63973297142246 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1759731.0618694786,
            "unit": "iter/sec",
            "range": "stddev: 2.1425242953460654e-8",
            "extra": "mean: 568.2686529028724 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 616245.9223899714,
            "unit": "iter/sec",
            "range": "stddev: 2.056289199783575e-7",
            "extra": "mean: 1.6227287900287024 usec\nrounds: 100000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 689236.7472438342,
            "unit": "iter/sec",
            "range": "stddev: 1.449061606435927e-7",
            "extra": "mean: 1.4508802729959869 usec\nrounds: 125001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2385316.4457729035,
            "unit": "iter/sec",
            "range": "stddev: 1.7947344548888324e-8",
            "extra": "mean: 419.23158739467937 nsec\nrounds: 114943"
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
          "id": "2e6ff22e8634369d747a2d6eab4965222ff01f3e",
          "message": "Merge pull request #79 from tomwillis608/renovate/sphinx-click-4.x\n\nUpdate dependency sphinx-click to v4",
          "timestamp": "2022-04-21T16:05:29-05:00",
          "tree_id": "fa4ec1456072ef1e0c3203d402e9973f664493d1",
          "url": "https://github.com/tomwillis608/asciize/commit/2e6ff22e8634369d747a2d6eab4965222ff01f3e"
        },
        "date": 1650575180807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 953282.2117313584,
            "unit": "iter/sec",
            "range": "stddev: 1.2488159416713247e-7",
            "extra": "mean: 1.0490073009794156 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 555703.3150917591,
            "unit": "iter/sec",
            "range": "stddev: 2.041637233206856e-7",
            "extra": "mean: 1.7995213863982034 usec\nrounds: 81968"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 513334.6346687632,
            "unit": "iter/sec",
            "range": "stddev: 4.837178847897702e-7",
            "extra": "mean: 1.948047009618326 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2231842.7079430115,
            "unit": "iter/sec",
            "range": "stddev: 1.7504281716453285e-7",
            "extra": "mean: 448.0602492467436 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1613399.8945041562,
            "unit": "iter/sec",
            "range": "stddev: 2.1776390575152703e-8",
            "extra": "mean: 619.8091393252632 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 583625.7980604651,
            "unit": "iter/sec",
            "range": "stddev: 1.9137696090571454e-7",
            "extra": "mean: 1.7134266568120375 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 652036.9783501697,
            "unit": "iter/sec",
            "range": "stddev: 2.2499054758323674e-7",
            "extra": "mean: 1.5336553496249108 usec\nrounds: 161291"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2223546.405232357,
            "unit": "iter/sec",
            "range": "stddev: 2.0263575940189487e-8",
            "extra": "mean: 449.7320126295638 nsec\nrounds: 109891"
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
          "id": "7120d72b8a660dcccf409d9d55e868537dec0cbd",
          "message": "Merge pull request #80 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-04-21T16:13:17-05:00",
          "tree_id": "5c0beaa3f36156dfdd243e52fa1dbd9d1e74099e",
          "url": "https://github.com/tomwillis608/asciize/commit/7120d72b8a660dcccf409d9d55e868537dec0cbd"
        },
        "date": 1650575652267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1015073.0105618198,
            "unit": "iter/sec",
            "range": "stddev: 1.1870246143901522e-7",
            "extra": "mean: 985.150811414563 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 595649.4926623811,
            "unit": "iter/sec",
            "range": "stddev: 1.6431033012162202e-7",
            "extra": "mean: 1.6788396738664024 usec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 545859.3801540036,
            "unit": "iter/sec",
            "range": "stddev: 2.2717710879434032e-7",
            "extra": "mean: 1.8319736480810669 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2346407.922205003,
            "unit": "iter/sec",
            "range": "stddev: 2.0105298595895744e-8",
            "extra": "mean: 426.18335479398814 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1279374.8220179614,
            "unit": "iter/sec",
            "range": "stddev: 1.0533326983143342e-7",
            "extra": "mean: 781.6317648198651 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 598439.3626163471,
            "unit": "iter/sec",
            "range": "stddev: 1.700429649076539e-7",
            "extra": "mean: 1.6710130757910873 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 680157.2648418086,
            "unit": "iter/sec",
            "range": "stddev: 1.9635456836663637e-7",
            "extra": "mean: 1.4702482083060313 usec\nrounds: 131579"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2379492.260828028,
            "unit": "iter/sec",
            "range": "stddev: 1.6297671111238484e-8",
            "extra": "mean: 420.25772323912565 nsec\nrounds: 116266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "2a9be90df51ee2a03ed7966188d539dbb2242ef6",
          "message": "Update dependency mypy to ^0.950",
          "timestamp": "2022-04-27T20:04:59Z",
          "tree_id": "7d020c4123a8cb8674e6c05c78452d21523e18a7",
          "url": "https://github.com/tomwillis608/asciize/commit/2a9be90df51ee2a03ed7966188d539dbb2242ef6"
        },
        "date": 1651089958254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 977557.6153320593,
            "unit": "iter/sec",
            "range": "stddev: 1.2815257686021018e-7",
            "extra": "mean: 1.0229576081408944 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 562176.7475798819,
            "unit": "iter/sec",
            "range": "stddev: 2.0184787219146217e-7",
            "extra": "mean: 1.778800002499047 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 493924.3258662549,
            "unit": "iter/sec",
            "range": "stddev: 1.861634817360149e-7",
            "extra": "mean: 2.0246016396260273 usec\nrounds: 109903"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2243793.3100011586,
            "unit": "iter/sec",
            "range": "stddev: 1.8081184419188927e-8",
            "extra": "mean: 445.6738486309083 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1644260.3617112255,
            "unit": "iter/sec",
            "range": "stddev: 2.0754370015535726e-8",
            "extra": "mean: 608.1761886900007 nsec\nrounds: 81308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 587861.41569273,
            "unit": "iter/sec",
            "range": "stddev: 1.560937591549976e-7",
            "extra": "mean: 1.701081195848872 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 663537.9847350412,
            "unit": "iter/sec",
            "range": "stddev: 1.6408621221672032e-7",
            "extra": "mean: 1.507072726815048 usec\nrounds: 158731"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2226849.4204883976,
            "unit": "iter/sec",
            "range": "stddev: 2.953470675605904e-8",
            "extra": "mean: 449.0649393711979 nsec\nrounds: 108696"
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
          "id": "02e6bf233db8fa4327f729f0053377038187a4ed",
          "message": "Merge pull request #81 from tomwillis608/renovate/github-codeql-action-2.x\n\nUpdate github/codeql-action action to v2",
          "timestamp": "2022-04-28T23:13:25-05:00",
          "tree_id": "4ab2bc320ad6d43a85dcadb116e9d2a7c41ab742",
          "url": "https://github.com/tomwillis608/asciize/commit/02e6bf233db8fa4327f729f0053377038187a4ed"
        },
        "date": 1651205659142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1040719.3231539768,
            "unit": "iter/sec",
            "range": "stddev: 1.1684350566008272e-7",
            "extra": "mean: 960.8738665190017 nsec\nrounds: 59881"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 600777.6222115856,
            "unit": "iter/sec",
            "range": "stddev: 1.8098636708609466e-7",
            "extra": "mean: 1.6645094008641583 usec\nrounds: 71429"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 545449.8611790355,
            "unit": "iter/sec",
            "range": "stddev: 1.6863766952197198e-7",
            "extra": "mean: 1.8333490778390087 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2375391.764089874,
            "unit": "iter/sec",
            "range": "stddev: 1.634160109752486e-8",
            "extra": "mean: 420.98318901209024 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1353048.8314145901,
            "unit": "iter/sec",
            "range": "stddev: 1.1398213533742201e-7",
            "extra": "mean: 739.0716260805729 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 610918.9221502856,
            "unit": "iter/sec",
            "range": "stddev: 1.5525868325963192e-7",
            "extra": "mean: 1.6368784199386786 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 691654.7629770559,
            "unit": "iter/sec",
            "range": "stddev: 1.879147305204992e-7",
            "extra": "mean: 1.4458080151082149 usec\nrounds: 123442"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2378617.4158294066,
            "unit": "iter/sec",
            "range": "stddev: 1.8955327539243718e-8",
            "extra": "mean: 420.41229217664574 nsec\nrounds: 114943"
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
          "id": "838f792bca3b09ddb8769a9fa5c612191a3d4095",
          "message": "Merge pull request #83 from tomwillis608/pre-commit-ci-update-config\n\n[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2022-05-17T11:38:44-05:00",
          "tree_id": "a74d5426ffbcd8c8cc2ee60ea22df4ee96184d7c",
          "url": "https://github.com/tomwillis608/asciize/commit/838f792bca3b09ddb8769a9fa5c612191a3d4095"
        },
        "date": 1652805578858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 981422.4380313734,
            "unit": "iter/sec",
            "range": "stddev: 1.220804748749957e-7",
            "extra": "mean: 1.0189292207399407 usec\nrounds: 81295"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 631453.5539864048,
            "unit": "iter/sec",
            "range": "stddev: 2.5262851815303755e-7",
            "extra": "mean: 1.5836477499998836 usec\nrounds: 80000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 556862.9725610613,
            "unit": "iter/sec",
            "range": "stddev: 2.431833593493519e-7",
            "extra": "mean: 1.795773914363372 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2385103.0633871974,
            "unit": "iter/sec",
            "range": "stddev: 1.750159722137929e-8",
            "extra": "mean: 419.26909379753465 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1800624.687929678,
            "unit": "iter/sec",
            "range": "stddev: 2.0983570082705164e-8",
            "extra": "mean: 555.3628175288461 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 627229.4387315974,
            "unit": "iter/sec",
            "range": "stddev: 6.132838083190324e-7",
            "extra": "mean: 1.5943129232298643 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 703647.2296682702,
            "unit": "iter/sec",
            "range": "stddev: 2.186383674711396e-7",
            "extra": "mean: 1.4211666838672032 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2406461.662474733,
            "unit": "iter/sec",
            "range": "stddev: 1.774838288459752e-8",
            "extra": "mean: 415.54786248731546 nsec\nrounds: 116280"
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
          "id": "adfd3782d6bd1c7927afb35daf6df73ceaf80ffd",
          "message": "Merge pull request #86 from sett-and-hive/tom-codecov-action-fix\n\nMatch ssacc codecov action settings",
          "timestamp": "2022-05-24T20:58:07-05:00",
          "tree_id": "083ef1e868a851e788c7ac2c3a876b265d2c6069",
          "url": "https://github.com/sett-and-hive/asciize/commit/adfd3782d6bd1c7927afb35daf6df73ceaf80ffd"
        },
        "date": 1653443940638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1038584.9280497379,
            "unit": "iter/sec",
            "range": "stddev: 5.532951891391012e-7",
            "extra": "mean: 962.8485576791559 nsec\nrounds: 42016"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 634830.6965112464,
            "unit": "iter/sec",
            "range": "stddev: 7.140910321554053e-7",
            "extra": "mean: 1.575223135074541 usec\nrounds: 82645"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 559925.8810304228,
            "unit": "iter/sec",
            "range": "stddev: 6.422732731215164e-7",
            "extra": "mean: 1.785950665755467 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2338284.704428354,
            "unit": "iter/sec",
            "range": "stddev: 8.69648263794997e-8",
            "extra": "mean: 427.66391881447527 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1679133.4720411906,
            "unit": "iter/sec",
            "range": "stddev: 1.0815186765999528e-7",
            "extra": "mean: 595.5452718028836 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 603702.0488985301,
            "unit": "iter/sec",
            "range": "stddev: 6.543780021253107e-7",
            "extra": "mean: 1.6564462582569097 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 719708.450030772,
            "unit": "iter/sec",
            "range": "stddev: 6.308912316157108e-7",
            "extra": "mean: 1.3894515202054993 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2506604.8719693245,
            "unit": "iter/sec",
            "range": "stddev: 8.807533697988107e-8",
            "extra": "mean: 398.94600508570034 nsec\nrounds: 123457"
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
          "id": "31e6b781b12055c268ad5ab5fa36ccb92de5808e",
          "message": "Merge pull request #84 from sett-and-hive/renovate/nox-poetry-1.x\n\nUpdate dependency nox-poetry to v1",
          "timestamp": "2022-05-25T12:00:03-05:00",
          "tree_id": "8dcca70164484fbe2133be2028ca65935e263c21",
          "url": "https://github.com/sett-and-hive/asciize/commit/31e6b781b12055c268ad5ab5fa36ccb92de5808e"
        },
        "date": 1653498055535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 997562.0098215833,
            "unit": "iter/sec",
            "range": "stddev: 9.733688456337336e-8",
            "extra": "mean: 1.0024439485008583 usec\nrounds: 69445"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 585236.0749978813,
            "unit": "iter/sec",
            "range": "stddev: 1.633911469876619e-7",
            "extra": "mean: 1.7087121637257583 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 539531.2771377993,
            "unit": "iter/sec",
            "range": "stddev: 2.1470499151518678e-7",
            "extra": "mean: 1.8534606655335655 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2348273.097487392,
            "unit": "iter/sec",
            "range": "stddev: 1.5980131201862632e-8",
            "extra": "mean: 425.84484788819145 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1301657.2143116551,
            "unit": "iter/sec",
            "range": "stddev: 1.2851809397955965e-7",
            "extra": "mean: 768.2514175045861 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 631550.5494055963,
            "unit": "iter/sec",
            "range": "stddev: 1.4399129788988694e-7",
            "extra": "mean: 1.5834045286496568 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 688506.9628171029,
            "unit": "iter/sec",
            "range": "stddev: 1.447747076292496e-7",
            "extra": "mean: 1.4524181366422042 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2301182.599769054,
            "unit": "iter/sec",
            "range": "stddev: 2.0732926000858115e-8",
            "extra": "mean: 434.55916975060006 nsec\nrounds: 111099"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "e4de29ef85621f5c3458abd4983520061da9e0e1",
          "message": "Update dependency mypy to ^0.960",
          "timestamp": "2022-05-25T19:46:31Z",
          "tree_id": "34df3b35435235ae72425036606df9f1538ce55c",
          "url": "https://github.com/sett-and-hive/asciize/commit/e4de29ef85621f5c3458abd4983520061da9e0e1"
        },
        "date": 1653508050288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 861021.850662595,
            "unit": "iter/sec",
            "range": "stddev: 4.344223965295411e-7",
            "extra": "mean: 1.161410711273419 usec\nrounds: 65781"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 521948.1636356422,
            "unit": "iter/sec",
            "range": "stddev: 5.887670705029073e-7",
            "extra": "mean: 1.9158990675136711 usec\nrounds: 71424"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 469276.37820755754,
            "unit": "iter/sec",
            "range": "stddev: 6.940014521635128e-7",
            "extra": "mean: 2.1309404147287108 usec\nrounds: 99001"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2027686.1688673329,
            "unit": "iter/sec",
            "range": "stddev: 7.444771639273026e-8",
            "extra": "mean: 493.1729650050681 nsec\nrounds: 35086"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1142476.5109479986,
            "unit": "iter/sec",
            "range": "stddev: 3.7919576556930693e-7",
            "extra": "mean: 875.2915183964919 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 543279.1818408158,
            "unit": "iter/sec",
            "range": "stddev: 6.153692016810098e-7",
            "extra": "mean: 1.8406742489407706 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 609326.15060529,
            "unit": "iter/sec",
            "range": "stddev: 5.567277769159763e-7",
            "extra": "mean: 1.6411572012896933 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2058772.2550693713,
            "unit": "iter/sec",
            "range": "stddev: 7.641226483728566e-8",
            "extra": "mean: 485.72638257463205 nsec\nrounds: 37593"
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
          "id": "bb92263555acc2758ecb3a83be14a3e74feecb0c",
          "message": "Merge pull request #85 from sett-and-hive/renovate/actions-checkout-3.x\n\nUpdate actions/checkout action to v3",
          "timestamp": "2022-05-26T16:24:16-05:00",
          "tree_id": "169410bc261a85faeace3c41e7000a997584b3bb",
          "url": "https://github.com/sett-and-hive/asciize/commit/bb92263555acc2758ecb3a83be14a3e74feecb0c"
        },
        "date": 1653600313426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 895181.125885625,
            "unit": "iter/sec",
            "range": "stddev: 0.000002271589799805421",
            "extra": "mean: 1.1170923638617547 usec\nrounds: 56494"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 605776.5650478641,
            "unit": "iter/sec",
            "range": "stddev: 0.000002260253395800584",
            "extra": "mean: 1.6507736642486117 usec\nrounds: 88488"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 539658.5804746642,
            "unit": "iter/sec",
            "range": "stddev: 0.000002623143834258082",
            "extra": "mean: 1.8530234414515119 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2098357.2547779293,
            "unit": "iter/sec",
            "range": "stddev: 6.685966691523822e-7",
            "extra": "mean: 476.5632723993008 nsec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1126186.0702542257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039289093609428636",
            "extra": "mean: 887.9527339334428 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 631787.7853036175,
            "unit": "iter/sec",
            "range": "stddev: 0.000006292417699318302",
            "extra": "mean: 1.582809961290137 usec\nrounds: 101011"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 744531.6034460599,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024527066569159038",
            "extra": "mean: 1.343126329858271 usec\nrounds: 151516"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2172798.171375337,
            "unit": "iter/sec",
            "range": "stddev: 8.38601054248312e-7",
            "extra": "mean: 460.2360279817222 nsec\nrounds: 92585"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "4c70b5d947b80b4ee713be0675569f0113ca52b7",
          "message": "Update dependency pep8-naming to ^0.13.0",
          "timestamp": "2022-06-02T18:56:37Z",
          "tree_id": "8a02ad6dae06f01ff05cc6f5705ec3335d895662",
          "url": "https://github.com/sett-and-hive/asciize/commit/4c70b5d947b80b4ee713be0675569f0113ca52b7"
        },
        "date": 1654196248146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1103689.622986798,
            "unit": "iter/sec",
            "range": "stddev: 2.8649989964818533e-7",
            "extra": "mean: 906.0518275906284 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 664129.7211636074,
            "unit": "iter/sec",
            "range": "stddev: 4.849685380371414e-7",
            "extra": "mean: 1.5057299321703619 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 599556.3212168053,
            "unit": "iter/sec",
            "range": "stddev: 5.177575569705036e-7",
            "extra": "mean: 1.6679000197520901 usec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2680227.19136592,
            "unit": "iter/sec",
            "range": "stddev: 4.5557937615171555e-8",
            "extra": "mean: 373.10269936135035 nsec\nrounds: 126567"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1995292.7738361075,
            "unit": "iter/sec",
            "range": "stddev: 5.000899904333002e-8",
            "extra": "mean: 501.1795828223253 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 695890.5793182547,
            "unit": "iter/sec",
            "range": "stddev: 4.349359327191528e-7",
            "extra": "mean: 1.4370075263551825 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 769621.9716390796,
            "unit": "iter/sec",
            "range": "stddev: 4.988597287863305e-7",
            "extra": "mean: 1.299339203986445 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2703311.391306864,
            "unit": "iter/sec",
            "range": "stddev: 4.7064517268902745e-8",
            "extra": "mean: 369.91668929320724 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "ff42fe92a2557195257bae4f6b8764a83a1f618e",
          "message": "Update dependency mypy to ^0.961",
          "timestamp": "2022-06-06T23:10:27Z",
          "tree_id": "ea77ad717ff59fb6bfde2f1e0dcd23a21cdecf5b",
          "url": "https://github.com/sett-and-hive/asciize/commit/ff42fe92a2557195257bae4f6b8764a83a1f618e"
        },
        "date": 1654557080561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 970355.9680641787,
            "unit": "iter/sec",
            "range": "stddev: 3.5453313618120383e-7",
            "extra": "mean: 1.0305496466363369 usec\nrounds: 87720"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 571787.7680616564,
            "unit": "iter/sec",
            "range": "stddev: 0.000004751396851448748",
            "extra": "mean: 1.748900651355258 usec\nrounds: 70922"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 521184.0716740073,
            "unit": "iter/sec",
            "range": "stddev: 4.263150794185219e-7",
            "extra": "mean: 1.9187079082982508 usec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2254056.551579293,
            "unit": "iter/sec",
            "range": "stddev: 1.6887666308346818e-8",
            "extra": "mean: 443.6445923679599 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1260119.4422894795,
            "unit": "iter/sec",
            "range": "stddev: 9.656451829569963e-8",
            "extra": "mean: 793.5755662837208 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 594193.4506320425,
            "unit": "iter/sec",
            "range": "stddev: 1.4759821616953667e-7",
            "extra": "mean: 1.682953588492606 usec\nrounds: 97088"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 684799.7185761237,
            "unit": "iter/sec",
            "range": "stddev: 1.4638091838344947e-7",
            "extra": "mean: 1.4602809739455787 usec\nrounds: 153847"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2253729.6309915283,
            "unit": "iter/sec",
            "range": "stddev: 1.7357569815190653e-8",
            "extra": "mean: 443.7089463831498 nsec\nrounds: 111112"
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
          "id": "4a05782e03ace8e608f3986da0ae2ab57952355e",
          "message": "Merge pull request #92 from sett-and-hive/renovate/actions-setup-python-4.x\n\nUpdate actions/setup-python action to v4",
          "timestamp": "2022-06-08T21:26:16-05:00",
          "tree_id": "e249d63483a3b109634fdc062f2589937c0bd655",
          "url": "https://github.com/sett-and-hive/asciize/commit/4a05782e03ace8e608f3986da0ae2ab57952355e"
        },
        "date": 1654741629076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 979155.3146747488,
            "unit": "iter/sec",
            "range": "stddev: 1.48824526493432e-7",
            "extra": "mean: 1.021288436076329 usec\nrounds: 69440"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 579128.3101501322,
            "unit": "iter/sec",
            "range": "stddev: 1.698853890592789e-7",
            "extra": "mean: 1.7267330615226903 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 541173.6607053139,
            "unit": "iter/sec",
            "range": "stddev: 1.709390970608892e-7",
            "extra": "mean: 1.8478356812426826 usec\nrounds: 101011"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2387565.254903299,
            "unit": "iter/sec",
            "range": "stddev: 1.8451522049075344e-8",
            "extra": "mean: 418.8367199373968 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1764167.395137142,
            "unit": "iter/sec",
            "range": "stddev: 2.666103766776373e-8",
            "extra": "mean: 566.8396336745978 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 632483.889766034,
            "unit": "iter/sec",
            "range": "stddev: 1.6080037910767206e-7",
            "extra": "mean: 1.5810679389318774 usec\nrounds: 104167"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 699209.7997745181,
            "unit": "iter/sec",
            "range": "stddev: 1.6336908957543648e-7",
            "extra": "mean: 1.430185904606144 usec\nrounds: 149254"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2392418.960074239,
            "unit": "iter/sec",
            "range": "stddev: 1.6164202469574135e-8",
            "extra": "mean: 417.9869900251267 nsec\nrounds: 116280"
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
          "id": "57aa1c0370009eaf9b65eee5d92e6dafe6dbe621",
          "message": "Merge pull request #93 from sett-and-hive/tom-ossf-scorecards\n\nCreate scorecards.yaml",
          "timestamp": "2022-06-08T22:05:31-05:00",
          "tree_id": "69492304268d9c536eb7cdae71e9c96da7a5b251",
          "url": "https://github.com/sett-and-hive/asciize/commit/57aa1c0370009eaf9b65eee5d92e6dafe6dbe621"
        },
        "date": 1654743986649,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 818844.686316627,
            "unit": "iter/sec",
            "range": "stddev: 3.826427628343816e-7",
            "extra": "mean: 1.2212328133901142 usec\nrounds: 74622"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 499023.2732222497,
            "unit": "iter/sec",
            "range": "stddev: 5.919002315629357e-7",
            "extra": "mean: 2.0039145540104513 usec\nrounds: 70922"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 459446.78845617344,
            "unit": "iter/sec",
            "range": "stddev: 5.59441232675043e-7",
            "extra": "mean: 2.17653061274013 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2005529.32407543,
            "unit": "iter/sec",
            "range": "stddev: 6.210054427361295e-8",
            "extra": "mean: 498.621480122668 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1068711.1001800986,
            "unit": "iter/sec",
            "range": "stddev: 3.981580112642753e-7",
            "extra": "mean: 935.7065719926374 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 522896.47530386,
            "unit": "iter/sec",
            "range": "stddev: 4.6191794693219757e-7",
            "extra": "mean: 1.9124244419870886 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 578275.4461034226,
            "unit": "iter/sec",
            "range": "stddev: 4.3467567573812813e-7",
            "extra": "mean: 1.7292797173704542 usec\nrounds: 120468"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2003348.3151453785,
            "unit": "iter/sec",
            "range": "stddev: 5.737249924772729e-8",
            "extra": "mean: 499.164320273161 nsec\nrounds: 99010"
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
          "id": "2a0defa6e3e908edd555396789c1f2fc73cf88dc",
          "message": "Merge pull request #97 from sett-and-hive/issue/96-token-permissions-and-pinning\n\nrestrict permissions, harden actions",
          "timestamp": "2022-06-09T00:11:23-05:00",
          "tree_id": "83da520a9a859d01d612118a00b95290032ccd03",
          "url": "https://github.com/sett-and-hive/asciize/commit/2a0defa6e3e908edd555396789c1f2fc73cf88dc"
        },
        "date": 1654751553260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 833291.9554293042,
            "unit": "iter/sec",
            "range": "stddev: 2.3088561851155577e-7",
            "extra": "mean: 1.200059587140511 usec\nrounds: 65786"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 482234.0597546644,
            "unit": "iter/sec",
            "range": "stddev: 2.028585994329141e-7",
            "extra": "mean: 2.073681814405121 usec\nrounds: 72464"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 448680.5796193155,
            "unit": "iter/sec",
            "range": "stddev: 4.4553431906236306e-7",
            "extra": "mean: 2.2287570388013074 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2005133.3404104996,
            "unit": "iter/sec",
            "range": "stddev: 4.872792680866766e-8",
            "extra": "mean: 498.71995036233585 nsec\nrounds: 104156"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1462142.9434487738,
            "unit": "iter/sec",
            "range": "stddev: 2.4810489281272638e-8",
            "extra": "mean: 683.9276587015021 nsec\nrounds: 71943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 506879.2206030496,
            "unit": "iter/sec",
            "range": "stddev: 2.6689925298707717e-7",
            "extra": "mean: 1.9728565688888757 usec\nrounds: 94331"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 564653.6465925731,
            "unit": "iter/sec",
            "range": "stddev: 2.1778843726440143e-7",
            "extra": "mean: 1.7709971520321233 usec\nrounds: 125000"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1985982.4699661934,
            "unit": "iter/sec",
            "range": "stddev: 2.778140176871856e-8",
            "extra": "mean: 503.5291172620808 nsec\nrounds: 99010"
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
          "id": "cded8316670aa02f73b34007bbec662ac40bacf3",
          "message": "Merge pull request #89 from sett-and-hive/renovate/sphinx-click-4.x\n\nUpdate dependency sphinx-click to v4.1.0",
          "timestamp": "2022-06-09T08:15:02-05:00",
          "tree_id": "3feb032fec9427c0c4a81a01f4346cbd8b4b9569",
          "url": "https://github.com/sett-and-hive/asciize/commit/cded8316670aa02f73b34007bbec662ac40bacf3"
        },
        "date": 1654780579954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 736669.0489943764,
            "unit": "iter/sec",
            "range": "stddev: 0.00003066653310822477",
            "extra": "mean: 1.35746167341372 usec\nrounds: 60976"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 460784.24834549334,
            "unit": "iter/sec",
            "range": "stddev: 0.000011298148157512215",
            "extra": "mean: 2.170213073885733 usec\nrounds: 66667"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 409847.46789734275,
            "unit": "iter/sec",
            "range": "stddev: 0.000022172154719780818",
            "extra": "mean: 2.439932117014998 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1787254.8606807406,
            "unit": "iter/sec",
            "range": "stddev: 7.935102340229151e-7",
            "extra": "mean: 559.5172921329967 nsec\nrounds: 93450"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 986358.4194533342,
            "unit": "iter/sec",
            "range": "stddev: 0.00002137827514567151",
            "extra": "mean: 1.0138302469747522 usec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 478892.0130787611,
            "unit": "iter/sec",
            "range": "stddev: 0.000009386732938490019",
            "extra": "mean: 2.088153430605523 usec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 560021.4325334734,
            "unit": "iter/sec",
            "range": "stddev: 0.000006081797436577922",
            "extra": "mean: 1.7856459447919941 usec\nrounds: 128206"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1757313.2212235513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017851485723511844",
            "extra": "mean: 569.0505186682838 nsec\nrounds: 88496"
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
          "id": "2ccd387fc418f8c930ca03b596f15ca6f6c8d1d4",
          "message": "Merge pull request #102 from sett-and-hive/tom-renovate-tweak\n\nenhance renovate rules",
          "timestamp": "2022-06-09T08:28:44-05:00",
          "tree_id": "703a8bd9723d349383ecb7e1764e058cadf817e5",
          "url": "https://github.com/sett-and-hive/asciize/commit/2ccd387fc418f8c930ca03b596f15ca6f6c8d1d4"
        },
        "date": 1654781395098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 937546.3767993354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015737791592446957",
            "extra": "mean: 1.066613902785133 usec\nrounds: 79366"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 562141.2430860641,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013663012716674848",
            "extra": "mean: 1.7789123504088804 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 493032.05644983705,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057792447441774426",
            "extra": "mean: 2.0282656815475115 usec\nrounds: 109891"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2101071.6299574217,
            "unit": "iter/sec",
            "range": "stddev: 2.1104460505705346e-7",
            "extra": "mean: 475.9476001393522 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1542226.255125944,
            "unit": "iter/sec",
            "range": "stddev: 3.80838530821367e-7",
            "extra": "mean: 648.4132899932505 nsec\nrounds: 80000"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 533044.2573564394,
            "unit": "iter/sec",
            "range": "stddev: 0.000003985540906839927",
            "extra": "mean: 1.8760168338729777 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 609467.041392896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021477175717852496",
            "extra": "mean: 1.6407778141941314 usec\nrounds: 121952"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2084666.4537882095,
            "unit": "iter/sec",
            "range": "stddev: 3.106254898922111e-7",
            "extra": "mean: 479.69304546633487 nsec\nrounds: 107527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "728a20be3ee29f28e9f823d55b4a65de471095e3",
          "message": "Update actions/checkout digest to 2541b12",
          "timestamp": "2022-06-09T17:14:19Z",
          "tree_id": "759e383bd1a009e7c5755b00a6e98b677c04df4a",
          "url": "https://github.com/sett-and-hive/asciize/commit/728a20be3ee29f28e9f823d55b4a65de471095e3"
        },
        "date": 1654795038287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 755331.8894481864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043112116201841565",
            "extra": "mean: 1.3239213304373496 usec\nrounds: 68489"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 441973.06012370635,
            "unit": "iter/sec",
            "range": "stddev: 0.000006876514939541628",
            "extra": "mean: 2.2625813431255386 usec\nrounds: 69926"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 412924.18399042747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061719281801173576",
            "extra": "mean: 2.4217520764615283 usec\nrounds: 92585"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 1792197.8178371387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014452070447951794",
            "extra": "mean: 557.9741198475241 nsec\nrounds: 93450"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1350399.294843007,
            "unit": "iter/sec",
            "range": "stddev: 0.000001443584500486925",
            "extra": "mean: 740.5217137027221 nsec\nrounds: 68489"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 488108.4483178788,
            "unit": "iter/sec",
            "range": "stddev: 0.000002485268111381793",
            "extra": "mean: 2.0487250393764005 usec\nrounds: 90082"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 532802.5513978626,
            "unit": "iter/sec",
            "range": "stddev: 0.000005487479408328152",
            "extra": "mean: 1.8768678891953434 usec\nrounds: 116266"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 1755285.7996412814,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015661449284883031",
            "extra": "mean: 569.7077935709897 nsec\nrounds: 88496"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "1272d96805d5b388863fddf8f30f81509a7aad41",
          "message": "Update actions/upload-artifact digest to 6673cd0",
          "timestamp": "2022-06-09T22:08:38Z",
          "tree_id": "00e6d12696a7c86ff5cfa298eb9a7f8d54ebc96c",
          "url": "https://github.com/sett-and-hive/asciize/commit/1272d96805d5b388863fddf8f30f81509a7aad41"
        },
        "date": 1654812602009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 959046.1090074293,
            "unit": "iter/sec",
            "range": "stddev: 2.0452353515914007e-7",
            "extra": "mean: 1.0427027341104131 usec\nrounds: 67115"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 568884.7366969594,
            "unit": "iter/sec",
            "range": "stddev: 2.989067531566069e-7",
            "extra": "mean: 1.757825329971355 usec\nrounds: 60245"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 506915.92098972725,
            "unit": "iter/sec",
            "range": "stddev: 2.4359843899567715e-7",
            "extra": "mean: 1.9727137353420494 usec\nrounds: 86965"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2205091.5803457,
            "unit": "iter/sec",
            "range": "stddev: 2.320641734525196e-8",
            "extra": "mean: 453.49590416680866 nsec\nrounds: 108708"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1251365.1740813456,
            "unit": "iter/sec",
            "range": "stddev: 1.1085472996520734e-7",
            "extra": "mean: 799.12724176148 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 583114.0021878697,
            "unit": "iter/sec",
            "range": "stddev: 3.872688662651505e-7",
            "extra": "mean: 1.7149305217298083 usec\nrounds: 84746"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 652548.2266953815,
            "unit": "iter/sec",
            "range": "stddev: 2.1189912492500274e-7",
            "extra": "mean: 1.532453785161865 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2224035.0390622416,
            "unit": "iter/sec",
            "range": "stddev: 2.2248077226012454e-8",
            "extra": "mean: 449.6332038103459 nsec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "3bcefb0c6c4994e5290dbafeb6a7376d242ceebc",
          "message": "Update github/codeql-action digest to 27ea8f8",
          "timestamp": "2022-06-10T02:41:56Z",
          "tree_id": "ed4dce19e69ab583b720d4c232380341d33e9112",
          "url": "https://github.com/sett-and-hive/asciize/commit/3bcefb0c6c4994e5290dbafeb6a7376d242ceebc"
        },
        "date": 1654828977061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 971048.9184344992,
            "unit": "iter/sec",
            "range": "stddev: 9.220281796926961e-8",
            "extra": "mean: 1.0298142359420728 usec\nrounds: 75752"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 595189.5580911236,
            "unit": "iter/sec",
            "range": "stddev: 1.5243200144972034e-7",
            "extra": "mean: 1.6801370024151194 usec\nrounds: 68028"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 530770.811548534,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011484087081599161",
            "extra": "mean: 1.8840523597793197 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2366623.0871917713,
            "unit": "iter/sec",
            "range": "stddev: 1.3233156195199585e-8",
            "extra": "mean: 422.5429919165475 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1269812.597620225,
            "unit": "iter/sec",
            "range": "stddev: 4.569616836146263e-7",
            "extra": "mean: 787.517781658581 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 606364.6482041607,
            "unit": "iter/sec",
            "range": "stddev: 1.5983144722498064e-7",
            "extra": "mean: 1.649172660315289 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 696366.8123445098,
            "unit": "iter/sec",
            "range": "stddev: 1.3885858858476322e-7",
            "extra": "mean: 1.436024782159313 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2404833.7325586197,
            "unit": "iter/sec",
            "range": "stddev: 1.2899289176875504e-8",
            "extra": "mean: 415.82916376328296 nsec\nrounds: 117634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "b0fd1607287e13718805c2ffdb8d80b45b9006d3",
          "message": "Update ossf/scorecard-action digest to c1aec4a",
          "timestamp": "2022-06-10T06:12:53Z",
          "tree_id": "d22d6f49978f7b12376317b437a409936a6b4434",
          "url": "https://github.com/sett-and-hive/asciize/commit/b0fd1607287e13718805c2ffdb8d80b45b9006d3"
        },
        "date": 1654841630335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 1115715.6690560507,
            "unit": "iter/sec",
            "range": "stddev: 1.2236230102605751e-7",
            "extra": "mean: 896.2857005011396 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 660363.0391885664,
            "unit": "iter/sec",
            "range": "stddev: 1.4961643386947283e-7",
            "extra": "mean: 1.5143185500338858 usec\nrounds: 77520"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 613195.0242107372,
            "unit": "iter/sec",
            "range": "stddev: 1.3058682845514742e-7",
            "extra": "mean: 1.630802535110476 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2712709.3735941052,
            "unit": "iter/sec",
            "range": "stddev: 3.488221072343974e-8",
            "extra": "mean: 368.63514010538285 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1989068.1949090916,
            "unit": "iter/sec",
            "range": "stddev: 2.0119663076630316e-8",
            "extra": "mean: 502.74797141658047 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 702412.2785005119,
            "unit": "iter/sec",
            "range": "stddev: 2.1510279912215502e-7",
            "extra": "mean: 1.4236653182298709 usec\nrounds: 103083"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 770799.4193164645,
            "unit": "iter/sec",
            "range": "stddev: 2.454169323655757e-7",
            "extra": "mean: 1.2973543764301065 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2719319.0804250403,
            "unit": "iter/sec",
            "range": "stddev: 1.7932289916638972e-8",
            "extra": "mean: 367.7391179276367 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "811b16bbdf813589a42d3d2fa6f82725b75ca640",
          "message": "Update actions/checkout action to v3.0.2",
          "timestamp": "2022-06-10T14:06:07Z",
          "tree_id": "c38fd04138edff4e7abbfc0905029a10e49f58e6",
          "url": "https://github.com/sett-and-hive/asciize/commit/811b16bbdf813589a42d3d2fa6f82725b75ca640"
        },
        "date": 1654870026331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 917706.7436162807,
            "unit": "iter/sec",
            "range": "stddev: 1.0849748011160693e-7",
            "extra": "mean: 1.0896727162093607 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 584938.9618900298,
            "unit": "iter/sec",
            "range": "stddev: 1.7621638305826735e-7",
            "extra": "mean: 1.709580084678994 usec\nrounds: 68028"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 531559.2879954305,
            "unit": "iter/sec",
            "range": "stddev: 1.777372210124961e-7",
            "extra": "mean: 1.8812576933254457 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2385631.5112746097,
            "unit": "iter/sec",
            "range": "stddev: 2.0690582091721326e-8",
            "extra": "mean: 419.17622033166424 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1777436.5266779081,
            "unit": "iter/sec",
            "range": "stddev: 3.4155114946937294e-8",
            "extra": "mean: 562.6079947105869 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 621836.9484002881,
            "unit": "iter/sec",
            "range": "stddev: 1.549321463188148e-7",
            "extra": "mean: 1.6081386005970835 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 677358.7804123171,
            "unit": "iter/sec",
            "range": "stddev: 1.6389293750980582e-7",
            "extra": "mean: 1.476322488048781 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2397389.532805092,
            "unit": "iter/sec",
            "range": "stddev: 2.4592743507113283e-8",
            "extra": "mean: 417.12036626329007 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "10fd7e63dcac97cb04ea441f30d175e09dbe0d58",
          "message": "Update actions/upload-artifact action to v3.1.0",
          "timestamp": "2022-06-10T17:09:40Z",
          "tree_id": "5aff520df130dd0cb2505f64541f333e18dffb90",
          "url": "https://github.com/sett-and-hive/asciize/commit/10fd7e63dcac97cb04ea441f30d175e09dbe0d58"
        },
        "date": 1654881037037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 919644.3825242531,
            "unit": "iter/sec",
            "range": "stddev: 2.1572660993638317e-7",
            "extra": "mean: 1.0873768371804604 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 584770.3977221783,
            "unit": "iter/sec",
            "range": "stddev: 6.114900031769861e-7",
            "extra": "mean: 1.7100728831268497 usec\nrounds: 78125"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 527582.2905808572,
            "unit": "iter/sec",
            "range": "stddev: 2.605823356978292e-7",
            "extra": "mean: 1.8954389065998039 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2372304.3939483343,
            "unit": "iter/sec",
            "range": "stddev: 5.242518723604331e-8",
            "extra": "mean: 421.53106597555654 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1730176.075645185,
            "unit": "iter/sec",
            "range": "stddev: 2.5172096513086267e-8",
            "extra": "mean: 577.9758569523434 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 605044.9218077391,
            "unit": "iter/sec",
            "range": "stddev: 1.7467209645195068e-7",
            "extra": "mean: 1.6527698422990202 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 681076.4185459598,
            "unit": "iter/sec",
            "range": "stddev: 1.818809081884929e-7",
            "extra": "mean: 1.4682640196747891 usec\nrounds: 149254"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2386565.580755425,
            "unit": "iter/sec",
            "range": "stddev: 4.200624155082951e-8",
            "extra": "mean: 419.0121604298852 nsec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "distinct": true,
          "id": "8e1199908bf7f248d251eeb20ffc472b13bc1ae6",
          "message": "Update ossf/scorecard-action action to v1.1.1",
          "timestamp": "2022-06-10T20:23:31Z",
          "tree_id": "88568db3ebffdf8d13d9811f21ceda67ee45fb3b",
          "url": "https://github.com/sett-and-hive/asciize/commit/8e1199908bf7f248d251eeb20ffc472b13bc1ae6"
        },
        "date": 1654892673125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_convert_char.py::test_remove_accents",
            "value": 970061.682799724,
            "unit": "iter/sec",
            "range": "stddev: 1.332710399683e-7",
            "extra": "mean: 1.0308622819879558 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins",
            "value": 574717.6823163881,
            "unit": "iter/sec",
            "range": "stddev: 1.8933253851359891e-7",
            "extra": "mean: 1.739984745152646 usec\nrounds: 74075"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins",
            "value": 523117.8914622172,
            "unit": "iter/sec",
            "range": "stddev: 1.7210303073800334e-7",
            "extra": "mean: 1.9116149845397254 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove",
            "value": 2250013.277374521,
            "unit": "iter/sec",
            "range": "stddev: 1.7950340981432996e-8",
            "extra": "mean: 444.4418217684818 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_convert_char.py::test_remove_accents_noop",
            "value": 1635229.6510025454,
            "unit": "iter/sec",
            "range": "stddev: 3.089030406463782e-8",
            "extra": "mean: 611.5348993254981 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_single_latins_noop",
            "value": 599288.1045193118,
            "unit": "iter/sec",
            "range": "stddev: 1.4201427497114265e-7",
            "extra": "mean: 1.6686465031741262 usec\nrounds: 114943"
          },
          {
            "name": "tests/test_convert_char.py::test_convert_multiple_latins_noop",
            "value": 664353.3224742558,
            "unit": "iter/sec",
            "range": "stddev: 1.6847052027134068e-7",
            "extra": "mean: 1.5052231488444927 usec\nrounds: 172414"
          },
          {
            "name": "tests/test_convert_char.py::test_direct_remove_noop",
            "value": 2248226.3659787723,
            "unit": "iter/sec",
            "range": "stddev: 1.7248200026370946e-8",
            "extra": "mean: 444.79506829575854 nsec\nrounds: 109891"
          }
        ]
      }
    ]
  }
}