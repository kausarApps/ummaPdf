'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5c0058216ff04deb0c9872c091b9f926",
"version.json": "5c5b08d6d2f2d6635528988da1ed0350",
"index.html": "63d439666c2abcbaf4a4808731566f8a",
"/": "63d439666c2abcbaf4a4808731566f8a",
"main.dart.js": "78a5c4fcd7eb91d2bd7ecc2ae08e07b9",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5eee75e2d2461b9e0fd7d66d161e3b99",
".git/config": "42a35ee2f6223d06f59b517ea487758b",
".git/objects/59/6e37a9b25109ca13151b629581fa00630a566d": "682a5772624e2e44cf27b0f04b528125",
".git/objects/3e/6c52242a49a92e5a7f849b95ad3006619e7145": "694cd6eb2569cb92f2e48ee77978304a",
".git/objects/57/19666ee4e5ac0a75385ff0d685cabd52669427": "282d37c567309b818372ff62034b9b9d",
".git/objects/57/33f0e1ecd3898df3e92b7d2709c70cea68ad0d": "2efd2c346b2f0529dae502f282c81480",
".git/objects/04/d7cccdee35ca482f25e7118a040cb82b521b09": "0c3fd89a7a360e946271358d18b4d05a",
".git/objects/04/2fc86d1a48e3ad456077b2e43d9b547f54973d": "725c07cacbf6b0260f4988d715bca3b4",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/c5b7eb4a16501e801857914f0401ae493cda06": "61748763c2a08625a2f4b0a1c0c1c610",
".git/objects/58/01294377ffe3d56790620776c29bc69f070904": "335c49906b285962ad72f638f5732aa3",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/569544bcb7780f685382dc6273a5019d30f4de": "27daae66a2dd7062517509a0a66f4157",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/6e7275ee4d1dddd7526c473e24582f6e70d94c": "ed8836e18a3ba9d7866411048f505e85",
".git/objects/34/5f83b82ec37b3fbc86406585ffa9d9b55797ef": "512ab9a8f35f090296dcede930bcb8ff",
".git/objects/02/5b05fd653c6bfe3a05e0f95fd860d8afda1c4b": "8da56e21198054201c3c737c2492b762",
".git/objects/b2/6ce076f21dacdef4f1323269ff55158a6d34ba": "3dc06fc56f0ec05444e80e70137c4f45",
".git/objects/ac/673ee089f5e1cb252396a603eafc754443de23": "d0e419eff395c7e3d9a06b57195c028a",
".git/objects/ad/791769238da95558b54832d87292c9ed242c6f": "5a7a7431be234a344cdac46f4cbf4d3f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b3/93143f0f4c2da5f4e4be59e0f4f8418de8125d": "3bfce0a5bb321c0fc37df7a56082c953",
".git/objects/df/719f291d859d6c8e77fb05d9a5303e89fc9f16": "98c87d3fcccd6b206ec8a837c88da312",
".git/objects/da/d696b6622d012ef50b3b2d2f276b1115d48919": "388e0959873209ef85b17417a4215ce6",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/cdf6cd5503f4c14c247c8b6b821de363f493fa": "0ebab5bbaa96c720bf4cc3d1af97f629",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/3fc3fb6bf7b810b7d2141aa0dc945b10984a6b": "d388e55b0f4691b1c1a002e00c3e50ee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/abcef170fa54c0cb169e9f61bd41ec4d798963": "807e7834269e421b0af795b1b3c9e4e0",
".git/objects/c7/2347a61588a45b057c8005b3b58de30b549908": "2311d84248f6c223b0edaa6cc349e135",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/54d8565ec46c905ac41dfad5454950e82adc66": "9a172db0a13f04b917d9d86e11868bbb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/a911ffe112699aadbf5c4b43b3911b157a1248": "ad094f516b1c410b1fd5b8307fce7599",
".git/objects/fe/fce8248a2a8da32231a59ec7b7bc717f84ab9b": "7720b2406f3d4c69736950ed7cb0edde",
".git/objects/fb/bb2a9c4d0ec50bccb1f30e723660cac6e887e3": "f422b3b4ce51f73fde3cbaebc591a891",
".git/objects/ed/2fc25ab853dbab036f10b2e1b6e477c274a3e7": "cd6a471dc900516e066e029f2212aca7",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/29/0125cceef87c90d07c5810dee4f57a78934f90": "73cffdf3d37300adc7147c8b44abfb3c",
".git/objects/7c/4e25b9a61f595ac327b05088e10fe9f1cb7cae": "c2a98111e16e3003a532d6644c716ca0",
".git/objects/7c/a0ba0cd85d597cd6a9bb789c8ac5821e2f2d0a": "fb8304bc8e0b3b385b3c45f2a850071c",
".git/objects/1a/8a31274c19aa9db2224df0e1027c5ba1d5cfe6": "ba888c2bd17a397849656b029a67cfb3",
".git/objects/1a/1c9927684d5930ef3990528bdccf7bdaf1dae2": "1b2896e332459ccb0b276d98ab277986",
".git/objects/1a/726d7345925443f0695add1aa32f69a8c8cd55": "5d54165b303c01069aa97c894baf67ae",
".git/objects/8f/234bcbcc6c8aae9d393889c5579f28d1b2f379": "d494ade900617b8518f708e8c7cccbe6",
".git/objects/8f/8ec9497d7a6449c4121d76b0d80af8b1fdb716": "601d90f3ed66e2b5dfd1a0c481a62f86",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/26ed1bb888b3bfdb038d307a5fbbed14933097": "105559ce15686664421875e3100dac6e",
".git/objects/26/5746d0b45222101f069500414e2ecc1f7ab37f": "994aa50d113286560e52cacb420f83c4",
".git/objects/86/2f569dc3f421b634daafe6aee2fb41a63a15af": "1c5cbccfc78b1c4b6d5352a150c199b4",
".git/objects/44/3012bc5903b5d791c512452322509697e56c00": "72c508729b6f702fca70f58dc67b538e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/54e5b4de8a4f95e6e97d63c7be80876a67dc5c": "4a5b9dd3407a57d0c8e02438d01811da",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/3a/91c8e448a8a6e2908571d48cf56e6ef6e1523a": "744a2ea67df76f3c59c32dd40d3f366f",
".git/objects/08/1b0ed26dc08ffe15907a400decca819395a71d": "1a1e753e47fa375983448074e9ddfb22",
".git/objects/6d/96b92960e0b76122a7633306146e261ebbfa34": "b5e98c3af4ed5f5f67f9d94f24058fca",
".git/objects/01/5f1e0cd8ccb4c6fdeb2c816b819b2f8a12c633": "63947c0393b3992665a643f4c8fee104",
".git/objects/97/bac677add8c6dcda3d77b91cbf19c96d321d64": "c9e71d8db47e6945458021a6a21adb71",
".git/objects/bf/2e874b371059f7a192cd072177a41a9a164002": "b41489d5bd41d58db598fbb623128e5e",
".git/objects/bf/d5b38a758c2174848cc96dde277804b25ed6a9": "2004fd1cd0b1ccf66a0facb5d10dd62b",
".git/objects/bf/09ef34f13ca5838309b3e35621196dce72dbdd": "b705cda2f6dba94e7b056b2420c6e580",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d2/14d462dfdcd18d941d927f3e97f56ac03dbd8f": "8b3acfa6fc76ba2b45432a948c0a41c0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/14e66e41e52108be9a51f35fec2fac452b9077": "07fa399c4ebf4f086ef5da53e7deb340",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/62ad68e2eaea696d4eae554937ba3d910af13f": "d404fb9f7d784ffd3116c1b7b8a08b9e",
".git/objects/ef/15755902b1918908b04d9facf702ac10eba168": "bf83f3986467991cc102446df1df5645",
".git/objects/ea/3994493bcde77d9f0be4b58e3a6b816abcc5ab": "56cc37e077c6b9009a9bb9284418f276",
".git/objects/ea/4b637dd22dd56336ecf27345ab903e8b9b6837": "4d990ffa133449c6b2388268297e8093",
".git/objects/cd/ebbe47331ff65f21893e57b0c2bbbd96029821": "42104e56be098ae855991061a71fae22",
".git/objects/cc/76ead873ad51a04fe07980af07562f12cdd8fd": "e53de84680d5af8f76c0f03713d4bf34",
".git/objects/f0/de54419c49c4225bba21e08c018bd7f42865fe": "814a1bd40420ece7ebf03bb9565a3ab6",
".git/objects/f7/bbd5c61831cbd03128d3d4dde30ea1b1a153d9": "4782cbc0ada41f70d7f8fba212d98646",
".git/objects/fa/53d78da82ca1919895a4a1f6de407a439f6861": "c536a958e18ac73ac1b277b6120b7425",
".git/objects/c2/195ed66c84ed00330be431598e3cd36522f8b4": "b60d0b35757ec532b66c76e14828abc7",
".git/objects/e9/68bda434bbe78abbe970f2ebf6056e9193ed4d": "26bc715953bb7c69d4b92edda2a1e761",
".git/objects/cb/40b80afbec458d58549bf3c67e0b49f2bbbbe7": "c7eb8d37d11296b7381aaa6719cbdc4c",
".git/objects/2c/4ad5745da508720bc31862a9786a8eea576480": "30e5deaef7c8f366cfa71616d9ac2de1",
".git/objects/48/1911bb698bd48cb49adf0152c9fea37a7d3778": "f4fb9106d2fd48ee4c492af64f7c5950",
".git/objects/70/404733275a12a7cae021b9a3afe171b8309d1f": "d0908ab7ed3da71e90708d4686437f01",
".git/objects/4a/49d83ca082e060c4665402f602b87b8798efd7": "e612eef470a58d184b4c369d353268e8",
".git/objects/4a/95ae55bc931f2ff8f170f64b50527eb74325c9": "dbe1237bf5414e2790473366781ec092",
".git/objects/4a/dae0ca479975d98b01c3e58da925e777ee47e8": "2c22f953ca60a36a6a1c2713584b1e69",
".git/objects/15/79a870ee4b548806416d62a58a51708fe0c741": "0f79cd230fe2a1f8d61176020e2d91ed",
".git/objects/12/5cb92cf5a5b61a1089ec36e7a2af5ae136e6fe": "d542d167495f0bda28ac465a82763ce9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/4726221ea151f378edea8f84d42c19f6b9a83f": "55a25f8c0cf30b414e41296aa224094b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/31ab206510c01839c7e67d76132a9cd8a47a26": "5d694eb8e8588b24119e48f9a9d4bf57",
".git/objects/7f/123354e451c3b4995693c3215017c09b8ff876": "0c1ff44c71e28c39b28df0c337ec41df",
".git/objects/7a/a76ccc64e3421af976aace817b3d9da22e94e1": "03dbf17f95e2bb58b7d74eb5b48a1a5d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "97aee7363c5fccbac5bb9e65f7703115",
".git/logs/refs/heads/main": "23a574c157aed3b7816bf20a6dae8880",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5c46169d9f31babbe53bb1f0998f49d5",
".git/index": "e27901d54108955e19f80fe7b57f6f11",
".git/COMMIT_EDITMSG": "4f98f59e877ecb84ff75ef0fab45bac5",
"assets/AssetManifest.json": "a9b55d02d7f5f8a5c72270cbae723d30",
"assets/NOTICES": "0b31cd39797e129569c77a064eba5b52",
"assets/FontManifest.json": "6af1749a07d9cee9dca30c6b64fd5496",
"assets/AssetManifest.bin.json": "625594b2642965fbdbc69d292cd75da1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "af0f231f68676d4be9b582cf654ddb69",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "489f91c8bee2492d410146e2ff739e27",
"assets/fonts/MaterialIcons-Regular.otf": "d16452a124974cbf287f73ae270b1f28",
"assets/assets/pdf/veroubezhdenie/osnovi_veri.pdf": "2b3de5320335e8f51a9ead0e45b9f20f",
"assets/assets/pdf/veroubezhdenie/vera_v_Allaha.pdf": "deeb49f9fb37134eb05b6112b0f5dada",
"assets/assets/pdf/imenaAllaha/raqaiq.pdf": "1692a1558a8401c04cb08d646755eab6",
"assets/assets/pdf/imenaAllaha/imenaAllaha.pdf": "be14f8bce845382468639cd649fcb33f",
"assets/assets/pdf/sira/abu_bakr.pdf": "44d90590c440b100a1ccf708521de2b8",
"assets/assets/pdf/sira/umar_ibn_hattab.pdf": "e24371e09accc0ea0b2f3445f3863c25",
"assets/assets/pdf/sira/usman_ibn_affan.pdf": "9cb29ab04161cbc7a4dbfd26d159dd72",
"assets/assets/pdf/sira/sira_proroka.pdf": "15cac876901bcf34c03d000445d9c843",
"assets/assets/pdf/sira/ali_ibn_abuTolib.pdf": "0c5e03713c573e53774b4bb7f639028d",
"assets/assets/pdf/sira/halid_ibn_valid.pdf": "27b30bb5960e7b77a8665560ba056012",
"assets/assets/pdf/sira/proroki_pisania.pdf": "ba69aadc6692d2f54ab42bfa28d2357f",
"assets/assets/pdf/hadis/bulug_al_maram.pdf": "2240e74944086cfe7b4b461af343ab59",
"assets/assets/pdf/hadis/sunan_ibn_madjah.pdf": "47a0573bb75a3baa69ba1dc44e129833",
"assets/assets/pdf/hadis/sunan_abu_daud.pdf": "c1d69264e2621a7a20353f43e0111878",
"assets/assets/pdf/hadis/Sakhikh_Imama_Muslima.pdf": "cde1fda8b490613ef1678a260576dc2f",
"assets/assets/pdf/hadis/sharkh_40_khadisov.pdf": "611642158c32a90778399de2be1943cd",
"assets/assets/pdf/hadis/40_hadisov.pdf": "b9f86e673224ea25668e02706289e1a2",
"assets/assets/pdf/hadis/sakhikh_al_dzhami.pdf": "5e3411fb1cc226c351f7296ab764c7df",
"assets/assets/pdf/hadis/sadi_pravednih.pdf": "126f11825cecd9112d7c93f0923c33ca",
"assets/assets/image/veroubezhdenie/01.png": "51e2895073195c9c6328113ad9f37a4e",
"assets/assets/image/veroubezhdenie/02.png": "6216ba44c0ea48fe995a71372f7b9eb4",
"assets/assets/image/imenaAllaha/imenaAllaha.png": "97550184200c47ea7c6a567b6e6d3b70",
"assets/assets/image/imenaAllaha/raqaiq.png": "2130506b12972b11b33202cd6c934621",
"assets/assets/image/sira/abu_bakr.png": "1c9b92ee7108e4c17bebd90a4b44ef42",
"assets/assets/image/sira/usman_ibn_affan.png": "efc32eb1c8cd5c6ab1147d9d8320f06e",
"assets/assets/image/sira/umar_ibn_hattab.png": "d4ba2cffc424127d939d8828ec0ae297",
"assets/assets/image/sira/sira_proroka.png": "5dd231c0986c20d81741268d474027f3",
"assets/assets/image/sira/ali_ibn_abuTolib.png": "00b2c816e9db69b16c20cc48e09d8c23",
"assets/assets/image/sira/halid_ibn_valid.png": "fe0f13c9b4408edce3a620508f2617b2",
"assets/assets/image/sira/proroki_pisania.png": "4bd13a01b816dd314f1cb88d59c1e3be",
"assets/assets/image/hadis/sahih_al_dzhamig.png": "4940bae09bc775c0bcea85d165aeb319",
"assets/assets/image/hadis/bulug.png": "9558a54a9a36e2a5e495fb989789862f",
"assets/assets/image/hadis/sahih_muslim.png": "589f1708f627febc02079cf929130b6a",
"assets/assets/image/hadis/sunan_abu_daud.png": "021143dbc97f7d18757ff3740af3f552",
"assets/assets/image/hadis/40_hadisov.png": "6d38228fa43241b931501d58a11361f2",
"assets/assets/image/hadis/sadi_pravednih.png": "d1daec494e7586a9b3f59d3ed2c6aa95",
"assets/assets/image/hadis/sunan_ibn_madja.png": "1c154f693cd84d81b52cbef097b00f1f",
"assets/assets/fonts/Mirza-Regular.ttf": "fcb6cbcd657b5c54588eb07cdbf379d4",
"assets/assets/fonts/Mirza-Medium.ttf": "b3ca7d5c9bc0693beb110a3013435ca3",
"assets/assets/fonts/Mirza-Bold.ttf": "553c7a92717403ab11e5c074d6ec746b",
"assets/assets/fonts/ProtestGuerrilla-Regular.ttf": "81efc633875043744f08b16877be62d7",
"assets/assets/fonts/Mirza-SemiBold.ttf": "5ca7973ca1b11293c5effdc34852bfa9",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
