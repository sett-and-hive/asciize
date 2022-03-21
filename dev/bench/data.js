window.BENCHMARK_DATA = {
  "lastUpdate": 1647834277720,
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
      }
    ]
  }
}