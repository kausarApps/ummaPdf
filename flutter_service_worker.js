'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "26eeef02febaa50b4e277686d88b7a45",
"version.json": "5c5b08d6d2f2d6635528988da1ed0350",
"splash/img/light-2x.png": "597e2f7e2d4a28c1e3886ec169dea84e",
"splash/img/dark-4x.png": "257e8fcc0ac0368972ac12cc218233a5",
"splash/img/light-3x.png": "ab69f7295e64e3043d32a0628b634e60",
"splash/img/dark-3x.png": "ab69f7295e64e3043d32a0628b634e60",
"splash/img/light-4x.png": "257e8fcc0ac0368972ac12cc218233a5",
"splash/img/dark-2x.png": "597e2f7e2d4a28c1e3886ec169dea84e",
"splash/img/dark-1x.png": "0d23ae07be2d7550215d8f1c07adda9d",
"splash/img/light-1x.png": "0d23ae07be2d7550215d8f1c07adda9d",
"index.html": "5bc06db41ff8fe678c6942e01d303c06",
"/": "5bc06db41ff8fe678c6942e01d303c06",
"main.dart.js": "41317f730e22d1ec12f3663c3508bb01",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5eee75e2d2461b9e0fd7d66d161e3b99",
".git/ORIG_HEAD": "d247a6b6f23bd2a4fc3fd8ab74193135",
".git/config": "1c55d7b9a2f3454c219c62813f3a88f2",
".git/objects/0d/c406b7dfcc2299ace87236a188cf3fa451d2da": "fe78c7343027e29acb3ecf234271a8d2",
".git/objects/95/ccb414702d742770d7ff7c053d93acda0810b6": "83940578a9d80c786c25e5f0e5e1a4f2",
".git/objects/59/6e37a9b25109ca13151b629581fa00630a566d": "682a5772624e2e44cf27b0f04b528125",
".git/objects/3e/6c52242a49a92e5a7f849b95ad3006619e7145": "694cd6eb2569cb92f2e48ee77978304a",
".git/objects/50/92911fcf1709e25956a27cfb1ae0e83ca23970": "7033e47a1a2818987e2e7502aca22cd2",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/19666ee4e5ac0a75385ff0d685cabd52669427": "282d37c567309b818372ff62034b9b9d",
".git/objects/57/33f0e1ecd3898df3e92b7d2709c70cea68ad0d": "2efd2c346b2f0529dae502f282c81480",
".git/objects/03/6f8202dccc47cbb623e412c2f489a4b6b6a3e6": "2f06864b810998b45f3df495045715ca",
".git/objects/9e/5ded7f72eb7dffb21468055d2f27b1a81a2a00": "5f698b38aca3417198e9dcf64ce1e1c6",
".git/objects/9e/399446aebd333a50b8f2681284bd60582efe31": "99fda0685caf964e4d009a53aff9fa95",
".git/objects/9e/76cfb47bdaedd17a0256cae665db84039ef28c": "c24c5c17520ff5bd4eed9465e8a06386",
".git/objects/04/d7cccdee35ca482f25e7118a040cb82b521b09": "0c3fd89a7a360e946271358d18b4d05a",
".git/objects/04/2fc86d1a48e3ad456077b2e43d9b547f54973d": "725c07cacbf6b0260f4988d715bca3b4",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/101c6241d8fb29316b5293469832958b2c7567": "c45c3e1a2c24f77d37d07fc4f78fda7c",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/c5b7eb4a16501e801857914f0401ae493cda06": "61748763c2a08625a2f4b0a1c0c1c610",
".git/objects/69/c06aa441ea688a3d9b65c136789c323d146a6c": "8e9fc07bb02f1202bc5f0d1da403c60a",
".git/objects/56/6591d096ed238a38decd021f0bd284f421ea78": "ace15861edb27c0ee6d640903e004ef7",
".git/objects/51/f37b4cf3eae04d4c25f43ff6bb24ab5f531f41": "e2e11972931de8303f42752b4aa041bc",
".git/objects/58/01294377ffe3d56790620776c29bc69f070904": "335c49906b285962ad72f638f5732aa3",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/569544bcb7780f685382dc6273a5019d30f4de": "27daae66a2dd7062517509a0a66f4157",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/72da60550458292d97da82fc5a806de1d164bb": "aa5b7e176bfb33b8e04afc7192097749",
".git/objects/60/6e7275ee4d1dddd7526c473e24582f6e70d94c": "ed8836e18a3ba9d7866411048f505e85",
".git/objects/34/5f83b82ec37b3fbc86406585ffa9d9b55797ef": "512ab9a8f35f090296dcede930bcb8ff",
".git/objects/34/b50a17c453352c4fa3e0e52db0ba16a52715f9": "bd4d8bdbeff1c6dec6a4c434369617bc",
".git/objects/34/89eaa309c35ed5247ea2d628832ba3f12003bc": "1035ae46e2661a1135577e23adb8fab0",
".git/objects/33/3dd165be14d5d8796d905ac2c4cc9bca78dee5": "a42bd95f97629a912d4f0dcbaddecd0f",
".git/objects/33/404a849d50fa4f1992b27f51fd8e1d67a95e33": "fc52b12344bf2d84d21f431d4e521412",
".git/objects/9d/6cb155d55521814df8b3b5c809203bf6adcbc2": "5246d3d3e3352adb5b9dd2208ad37bda",
".git/objects/02/5b05fd653c6bfe3a05e0f95fd860d8afda1c4b": "8da56e21198054201c3c737c2492b762",
".git/objects/b2/6ce076f21dacdef4f1323269ff55158a6d34ba": "3dc06fc56f0ec05444e80e70137c4f45",
".git/objects/ac/673ee089f5e1cb252396a603eafc754443de23": "d0e419eff395c7e3d9a06b57195c028a",
".git/objects/ad/791769238da95558b54832d87292c9ed242c6f": "5a7a7431be234a344cdac46f4cbf4d3f",
".git/objects/bb/c9265483166283b321dad85b9ae089e3f65a70": "e1bfc4073bc550a9bd200be75b33ca08",
".git/objects/bb/beafc8887eabea8efb4547ea0d767b991c02ab": "e1af51e4c06c7bd1baa01eaaef9b796b",
".git/objects/d7/3f1404d8452f6f4a0d38508820dec6cef17de2": "5adc8d78382d05e18a19514723939fff",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/71ed07129a6962b5a366d9afc9eb3382269b2e": "e62c003c9429fdefe88591f5c2362953",
".git/objects/b3/a3a58eca11828ad9528e16ceb0b096078a5b55": "c4dc5ee3113f79f609c8465eaa91ecd6",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b3/93143f0f4c2da5f4e4be59e0f4f8418de8125d": "3bfce0a5bb321c0fc37df7a56082c953",
".git/objects/df/719f291d859d6c8e77fb05d9a5303e89fc9f16": "98c87d3fcccd6b206ec8a837c88da312",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/d696b6622d012ef50b3b2d2f276b1115d48919": "388e0959873209ef85b17417a4215ce6",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/cdf6cd5503f4c14c247c8b6b821de363f493fa": "0ebab5bbaa96c720bf4cc3d1af97f629",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/d4cfde5e194416e7ed3d8df2ce0bb09e60897e": "df220967446b9c21c1574d8a701ee74c",
".git/objects/d8/3de6b525c7eaa9273bf6ce5e70e63ba93ea2bb": "af0bc26cd9057bdd28c0ec44e08d3003",
".git/objects/e2/3fc3fb6bf7b810b7d2141aa0dc945b10984a6b": "d388e55b0f4691b1c1a002e00c3e50ee",
".git/objects/f3/010f87b60c0b17fe0b719c7e5e0e7a2c96cc53": "8ed50c6bd67d8fc805c743172d5e7b6f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/abcef170fa54c0cb169e9f61bd41ec4d798963": "807e7834269e421b0af795b1b3c9e4e0",
".git/objects/c7/efb49c969ca3a0864067b27b8b347abd550581": "7772d37d1afee4dea99ef2c81c038d1f",
".git/objects/c7/2347a61588a45b057c8005b3b58de30b549908": "2311d84248f6c223b0edaa6cc349e135",
".git/objects/c0/8ab5debd6312f2e4bfb8790ba27b3e528b6f3d": "7ba4e832c3b081aac6fb733a086e8367",
".git/objects/c0/0da0c910949c43c107b439adbaab9a2c274bec": "dbbc46275d0b91a096ac3deb1b677296",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/4b84e9a923a768827889716d0af51ec989f230": "d5e6ae9d6293a57b5121700396ccdba0",
".git/objects/fc/54d8565ec46c905ac41dfad5454950e82adc66": "9a172db0a13f04b917d9d86e11868bbb",
".git/objects/fc/72b1d44b2393af530810c9de990fb0f70af6e4": "85d8056b3b9f716637ca3379f47f0485",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/2ac962f36cb88dc9a3663a50dc2dbdaf613177": "798332111d266bf6a705b79148256c68",
".git/objects/e3/2ecc6af5b3ee3b86bef2efbf49b643276be14a": "fec2a4fb76c00a9efae5c3bfbcd37b41",
".git/objects/cf/a911ffe112699aadbf5c4b43b3911b157a1248": "ad094f516b1c410b1fd5b8307fce7599",
".git/objects/fe/fce8248a2a8da32231a59ec7b7bc717f84ab9b": "7720b2406f3d4c69736950ed7cb0edde",
".git/objects/c8/5afdb98207fa96ff41d767bd831394f5d01130": "fe14536b13803d07436c4971a2989f1c",
".git/objects/fb/bb2a9c4d0ec50bccb1f30e723660cac6e887e3": "f422b3b4ce51f73fde3cbaebc591a891",
".git/objects/ed/2fc25ab853dbab036f10b2e1b6e477c274a3e7": "cd6a471dc900516e066e029f2212aca7",
".git/objects/c1/448b3147782bf8858f6948fcf508853d8bef77": "e6d67e51a503d7a925e755b09718f646",
".git/objects/c1/cf1f5bc7d5c2649050690037804c79316e2ee3": "8d0991df81c8f77302ae6a930ae569b6",
".git/objects/4e/28eba1c9cc4dd00ac95a68285cd60a7d23f204": "5417daade3d45c1044dcd4538004294e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/29/0125cceef87c90d07c5810dee4f57a78934f90": "73cffdf3d37300adc7147c8b44abfb3c",
".git/objects/29/edafc28ef7623bfd9dd490b980a734b3575445": "62298d455028bc9e41954e884a8e6fde",
".git/objects/7c/4e25b9a61f595ac327b05088e10fe9f1cb7cae": "c2a98111e16e3003a532d6644c716ca0",
".git/objects/7c/1fb7393f578b0a821b38649f185698dc24ae2e": "52bf6b4bc6be25f753732b3fbffa7d97",
".git/objects/7c/a0ba0cd85d597cd6a9bb789c8ac5821e2f2d0a": "fb8304bc8e0b3b385b3c45f2a850071c",
".git/objects/42/4f39f0f49c2cc5baf9d48297d00e19fa5ae649": "c61ff25409d847ad67b31ae843c2c20c",
".git/objects/42/6117fdd25d5c58268cfc279b03acb02d2f5136": "1d2e61a326777e365a79a263f2ddfa04",
".git/objects/89/d830416b21f4653ea7feefa4589056cd09dd8c": "f2591f1542ca7fdce016910f8081b63c",
".git/objects/89/f72d38e7993e30170f0842fcaf4e3456409be6": "37218247f2762f502b05ff620a12c0aa",
".git/objects/89/52c1ec671675f12797528a54d7d923e24cc1bf": "673d26738a5495a615ec26164d15565f",
".git/objects/45/a7ef53487b5a054a0969a705f2d71f84cc0a70": "ed730042f53724c0b32d5183cc50b0d1",
".git/objects/1f/f8ee5ee5d2b8d5d62a62c903337efd50b50633": "906e306ca1bc6be54ae37b5d5c040b8b",
".git/objects/1f/3a165ff11490cc802e15a98228554928aada13": "7f23ec96c98e87ae543c815b065a2f0c",
".git/objects/73/269712a6798120a03e9b7816b581fed9eeac08": "55dcde3571c6534570d0df0e108854ff",
".git/objects/73/a7af823eeed748939f47dfb16a34e0bfa3d86b": "a31765b9c5756b3e5257a56b724b1186",
".git/objects/87/9664d11d4acf28ffeea6c99ad3af33ccb1cff2": "e3869ee67498796d403da0e3bf493ca8",
".git/objects/1a/8a31274c19aa9db2224df0e1027c5ba1d5cfe6": "ba888c2bd17a397849656b029a67cfb3",
".git/objects/1a/1c9927684d5930ef3990528bdccf7bdaf1dae2": "1b2896e332459ccb0b276d98ab277986",
".git/objects/1a/726d7345925443f0695add1aa32f69a8c8cd55": "5d54165b303c01069aa97c894baf67ae",
".git/objects/28/299d88145e998b66cbbfa930101c772cdec04b": "980bdf6c7d3f87d45c12a75e12c2177b",
".git/objects/17/36157037114f7889c40f18dc03d22af1815d3f": "dc7c1f6ec959422199a7066b725f824c",
".git/objects/7b/4d4d858953190fe6cdbc9b6f47b06678dd7c95": "92b04f6e00fe6f99b425e3de11c302dd",
".git/objects/7b/b0639bd1904103c62f9192f743ca253851bd81": "90e87a938065549892db881cc46150aa",
".git/objects/8f/7b887bcba3a5c544e2983de048c66af461d889": "9786807023204b94eb74894aff860778",
".git/objects/8f/234bcbcc6c8aae9d393889c5579f28d1b2f379": "d494ade900617b8518f708e8c7cccbe6",
".git/objects/8f/8ec9497d7a6449c4121d76b0d80af8b1fdb716": "601d90f3ed66e2b5dfd1a0c481a62f86",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/5716c9aa9095911be580d50573f14c4b7aee5d": "3fe752fda6291fd102598ddffb5b5e00",
".git/objects/7e/26ed1bb888b3bfdb038d307a5fbbed14933097": "105559ce15686664421875e3100dac6e",
".git/objects/19/b4d79f92fb971a52b1512d2ab99dbb87378f09": "28ff8116c13352fba91751b05a89d544",
".git/objects/19/f57d9a6d78aa5c1e05b038dd43fa851a0eb660": "6b13726a904e714277e607c418a4c7a3",
".git/objects/26/5746d0b45222101f069500414e2ecc1f7ab37f": "994aa50d113286560e52cacb420f83c4",
".git/objects/21/50cdd5e431a8e98581c3da810fd84ee3fadad5": "167ae38a335950a366676f4833756b3b",
".git/objects/4d/662f37478ba1152a8b3f92b9868902e5bcd67b": "80bc31e94c918b3b1c62a4807dd4037f",
".git/objects/4d/b8d26864efcfca06bf0001a409c9b37b035be3": "1761302b22a336abe4b08dc8b82c2459",
".git/objects/75/fe9f400705b48885c1384671ab4e2623865ab3": "713f6a4eef11026117dfd6bff6607dd5",
".git/objects/86/2f569dc3f421b634daafe6aee2fb41a63a15af": "1c5cbccfc78b1c4b6d5352a150c199b4",
".git/objects/86/deafd47e5301cefd1415e5f3b01f01d94f6262": "91d363861b24625cb4dc843e1bd9c5f3",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/3012bc5903b5d791c512452322509697e56c00": "72c508729b6f702fca70f58dc67b538e",
".git/objects/44/79b7a436e773400c72587f2ab3d68af9766cd6": "f20e5da9f636b1864ee5e7abca459422",
".git/objects/2a/a99d964ba9aa5df363cf361c00da5c1d0b94e6": "330c5b0b2d8c3afe47b5cdc685701026",
".git/objects/2f/4965b93a3a9dcadb66c398b8c184f6cb7d4df9": "4b8731ba285cba0e9223dc799ba59d55",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/614f82808c0b9476d0daf98252bbf234411573": "fca77a0e0be04ac33276216d437bbb5e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/b0b57e6d8cd3540ea84718d8debb0940a60d44": "422dda3e3cf650fd020d646baafbb5d7",
".git/objects/07/9e5679c2727e394a53c49b003fc3dfc321e57f": "a3f0b2c2ef7560400bdea45a52b7ef6b",
".git/objects/9a/54e5b4de8a4f95e6e97d63c7be80876a67dc5c": "4a5b9dd3407a57d0c8e02438d01811da",
".git/objects/5c/8a4b09185543761dd51baf184aee25a77a0282": "7f8842f2595def318c8cd86493605eed",
".git/objects/5c/0f28a462dad681bc5298b929b98ca623ccb7dc": "1aff884424060bab6f6aed4b450912d2",
".git/objects/5c/c0f3795fc9d68c1623fc89b431975fdcae5b43": "a46e081c675a2e983823bda98fe9ee6d",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/d1da8035bfbdc7dc9b6562f15011a961285278": "5de76f729b0e0bd266d5abad4e2dda82",
".git/objects/5d/11db0c7731c6e6989d55eddfefc3f94c768770": "988e0f3b5242d01ea97a2b37677a31b8",
".git/objects/31/67dce2bca96386338f93e69d2bc3d1e5d74503": "ad2fa7adf523c8a4a8a67855d2cec37b",
".git/objects/65/43ead246e706dc1d07b9e9b27c576304c267bd": "1f2519c707f46da362fbb4cf127d1aa9",
".git/objects/96/76910bd55289369e34ac67489e37d58d76dce4": "14fe0da047b58f98e98f6178f8c28e94",
".git/objects/3a/91c8e448a8a6e2908571d48cf56e6ef6e1523a": "744a2ea67df76f3c59c32dd40d3f366f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/1b0ed26dc08ffe15907a400decca819395a71d": "1a1e753e47fa375983448074e9ddfb22",
".git/objects/08/d8532ecc84f62ac134a18c766fc717951a7e64": "d6ce7197f11ffb8534b81697f1308779",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/96b92960e0b76122a7633306146e261ebbfa34": "b5e98c3af4ed5f5f67f9d94f24058fca",
".git/objects/6d/87b4c71df190f6dee75bde65dd55b2f4ec91cb": "1da6ec0cd7c509a0e155979974c6d50a",
".git/objects/6d/635c099ebbd3c977ff9dba7f8f80365af138f4": "93060e8ad27cee3899969170ec00072d",
".git/objects/01/5f1e0cd8ccb4c6fdeb2c816b819b2f8a12c633": "63947c0393b3992665a643f4c8fee104",
".git/objects/06/a40f3157aeec7d0852370bb9bba46664abffd1": "2a2b789f02b780a2c88a8d65817e8ce2",
".git/objects/39/d6c1ae5b65f64aaccc30f78e9d2f3a78e297c9": "3873583f03c9563d8d906b5ce05d0e75",
".git/objects/97/bac677add8c6dcda3d77b91cbf19c96d321d64": "c9e71d8db47e6945458021a6a21adb71",
".git/objects/97/f7e1a4e180ba0ea80f0ccb4974f0ef70b755f8": "5652a474ddb05f8cbdea54bb68bb2680",
".git/objects/97/ce702096a95e3119b3989ff48b5ef3f0381004": "c430825515f551a76aecc6153294f7e5",
".git/objects/63/7f06b2fb23161e85df18fdb6f93983e8e9b89e": "8a52ffe2fcb52ba6a4a19fd1ec6b5c28",
".git/objects/0a/49f6513c152e3bd116276dfda0836a8605119b": "02088dbc6f553042e9aa5fa6da3627df",
".git/objects/64/0d66c9777ab4384ffba6cce7e98487a387eb1c": "52559545bef7f6f724115f8e9e4f564a",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/d48075720d6a5100a081c302b32ea0c1309c13": "3caa0224981f972577314a7da48de465",
".git/objects/bf/2e874b371059f7a192cd072177a41a9a164002": "b41489d5bd41d58db598fbb623128e5e",
".git/objects/bf/d5b38a758c2174848cc96dde277804b25ed6a9": "2004fd1cd0b1ccf66a0facb5d10dd62b",
".git/objects/bf/09ef34f13ca5838309b3e35621196dce72dbdd": "b705cda2f6dba94e7b056b2420c6e580",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/eba7a52e6563f3fab8c7d219e7f373c4d5eabb": "88f0fda66aba921251f976c122212787",
".git/objects/a9/ea010dbbadb87184677085e263f88af3aaf5ec": "c0fe593614643aed77592421afd68d2e",
".git/objects/d5/adccf3a2ed389f1d130d25d90b1422c6ccd895": "ff4534cef7b2f7506b55e04e1df4062d",
".git/objects/d2/14d462dfdcd18d941d927f3e97f56ac03dbd8f": "8b3acfa6fc76ba2b45432a948c0a41c0",
".git/objects/d2/8ee2e9af0f108e5730b745b0338022a76a329f": "d8c50bf59f8502d30d2ad50c9453d840",
".git/objects/aa/afc91d3928babf8bddd539e17039ee0850b52a": "e862fa05afe75f277ca88db782575a56",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a447df8d01d7542811f549582f3fbaa617caaa": "294eb735a0427728a3e6a11d1f435e7a",
".git/objects/db/14e66e41e52108be9a51f35fec2fac452b9077": "07fa399c4ebf4f086ef5da53e7deb340",
".git/objects/db/06caee99fc8071c6547e44cd4da210eb0c47f1": "2f4b16eb03b4fb7975f4f2ea4872283c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/62ad68e2eaea696d4eae554937ba3d910af13f": "d404fb9f7d784ffd3116c1b7b8a08b9e",
".git/objects/ef/423e07ea1176fe0043a4b1ce93fb56de335eac": "7f0cad379954fbe70a63eba6034359c3",
".git/objects/ef/15755902b1918908b04d9facf702ac10eba168": "bf83f3986467991cc102446df1df5645",
".git/objects/ef/8b44366f06834f20ce97a494846846c5d40a91": "bdae257546e7c607fade7329ac58a2b2",
".git/objects/c4/923afcea9730534c00f35a3f51ee578353a10a": "28c372f84e9dfe9a0bfffc6ba290f2af",
".git/objects/ea/3994493bcde77d9f0be4b58e3a6b816abcc5ab": "56cc37e077c6b9009a9bb9284418f276",
".git/objects/ea/4b637dd22dd56336ecf27345ab903e8b9b6837": "4d990ffa133449c6b2388268297e8093",
".git/objects/cd/577cdcd68e8831187156ae75abac7df119760b": "0f47c6708f04464982cf514412f45776",
".git/objects/cd/ebbe47331ff65f21893e57b0c2bbbd96029821": "42104e56be098ae855991061a71fae22",
".git/objects/cc/76ead873ad51a04fe07980af07562f12cdd8fd": "e53de84680d5af8f76c0f03713d4bf34",
".git/objects/f9/66dbaf1b7cc65f330268eab583113e8cf6f13a": "68505bfcf924c9979a060eefe6995f3c",
".git/objects/f9/1be1495357bff20de6ae894f5c1558e6db073f": "32642972d4123bbe060221bb17ad9669",
".git/objects/f0/de54419c49c4225bba21e08c018bd7f42865fe": "814a1bd40420ece7ebf03bb9565a3ab6",
".git/objects/f7/abd74ae5108d3fc0a0afdfe9b5b172020092c2": "f0fda52795e3de60c26f953ab8a8088a",
".git/objects/f7/bbd5c61831cbd03128d3d4dde30ea1b1a153d9": "4782cbc0ada41f70d7f8fba212d98646",
".git/objects/fa/53d78da82ca1919895a4a1f6de407a439f6861": "c536a958e18ac73ac1b277b6120b7425",
".git/objects/ff/807974f9a3f99fb7da559c110eee86b4cb3e04": "fe944bf8aa63891fc8315522b1bc82c6",
".git/objects/c2/c290d28ddf3634339da21cdfc40021e2f71c3f": "e9575210b56829a754f0124f1e212b62",
".git/objects/c2/195ed66c84ed00330be431598e3cd36522f8b4": "b60d0b35757ec532b66c76e14828abc7",
".git/objects/e9/68bda434bbe78abbe970f2ebf6056e9193ed4d": "26bc715953bb7c69d4b92edda2a1e761",
".git/objects/f1/3f33552685268bd932a1110e659d3658a7b27e": "54022dcf6fd7e9dc6791e2e084cc222c",
".git/objects/f1/aae53095e8245d632b61940bb1af00bf607407": "192a7808dd7d766d2ce118536026b843",
".git/objects/cb/40b80afbec458d58549bf3c67e0b49f2bbbbe7": "c7eb8d37d11296b7381aaa6719cbdc4c",
".git/objects/f8/fccf8a0389b1efc140df6eed607e110fd64958": "6af3740293ca5e0f1d6b9a9928e18caa",
".git/objects/2c/134223486905b19c721eeac3ebef3efda19ba6": "68622e8cd5e71ab4c324a93c80c76e41",
".git/objects/2c/4ad5745da508720bc31862a9786a8eea576480": "30e5deaef7c8f366cfa71616d9ac2de1",
".git/objects/2d/9cfb21e5bb84d1870bc1869cb6a84ef6a8bd70": "915761b90d8a89ecd282f0eef3407fa8",
".git/objects/83/d2b747113a022d0a96a8b669371d3a4a4a63f7": "ff2c6a473d39713d6fadfcaad15b951d",
".git/objects/48/1911bb698bd48cb49adf0152c9fea37a7d3778": "f4fb9106d2fd48ee4c492af64f7c5950",
".git/objects/70/404733275a12a7cae021b9a3afe171b8309d1f": "d0908ab7ed3da71e90708d4686437f01",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/49d83ca082e060c4665402f602b87b8798efd7": "e612eef470a58d184b4c369d353268e8",
".git/objects/4a/95ae55bc931f2ff8f170f64b50527eb74325c9": "dbe1237bf5414e2790473366781ec092",
".git/objects/4a/dae0ca479975d98b01c3e58da925e777ee47e8": "2c22f953ca60a36a6a1c2713584b1e69",
".git/objects/8d/200a5790b27654672be2b08b11555014d90fa0": "f234dd8aaf6646e23eba91af3760d09c",
".git/objects/8d/e0f423187d0132535f1372de21d72f429018dc": "f66a4748e019423523d2a1f6827caf0f",
".git/objects/15/79a870ee4b548806416d62a58a51708fe0c741": "0f79cd230fe2a1f8d61176020e2d91ed",
".git/objects/12/5cb92cf5a5b61a1089ec36e7a2af5ae136e6fe": "d542d167495f0bda28ac465a82763ce9",
".git/objects/8c/21de887e665e046745a62e2044a8cbd13f987f": "aeea17fbc2cabb6bdb8a292f5214ed24",
".git/objects/85/b375f40edb5eb53c89accab1b369060006bc3d": "0c90d913ca9b923227d06c8ae7dacd5a",
".git/objects/71/1bbcad179dcb4d76d314e0d47541395fde47b5": "d99fa255b49b7e6b334bf6ff4d20437e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/7f42ee50ed35246a7ea1720376a110193038a3": "74fd09a9d1bea35fdfa2f168543317b8",
".git/objects/76/4726221ea151f378edea8f84d42c19f6b9a83f": "55a25f8c0cf30b414e41296aa224094b",
".git/objects/1c/f12f3154e77c087968768a2a7c1d1302c8a8fe": "978fb8d30b2cc935f3c4528e60d3e3bb",
".git/objects/82/d1ed0ed02c7ddc9d9927bceb242a8a6a0c5823": "26e1d0cb8a661817d7523128da29cd67",
".git/objects/82/372fe1653c74a4000dcfb539f1770e2b9470fe": "224ae981ea381ddd1de43bacab0db355",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/31ab206510c01839c7e67d76132a9cd8a47a26": "5d694eb8e8588b24119e48f9a9d4bf57",
".git/objects/49/f43dfa05e5027513896acdb36147eca6782666": "4489f509c82762d15fccd5ae4722a027",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2e/b160a0f5e35bec4dd9997dcd5a600f99aa9e46": "a507ca549bcae438093e8358a0be5920",
".git/objects/2b/5f9b6c03934729c1a21a62dacc095241c586fd": "b3145def2c1cea5cb2dc83e99622f355",
".git/objects/13/0ac41d2610ae5803aa40597f4ba65c36aa8a9a": "d86fe3d5c9b7eb6a4da372a21cd58da8",
".git/objects/7f/123354e451c3b4995693c3215017c09b8ff876": "0c1ff44c71e28c39b28df0c337ec41df",
".git/objects/7a/a76ccc64e3421af976aace817b3d9da22e94e1": "03dbf17f95e2bb58b7d74eb5b48a1a5d",
".git/objects/7a/27277c63ec2a8caa8b0090feab494320ca9434": "25f8a3dbdda83ad509ceed24fc0c3c33",
".git/objects/8e/c3b62855176243bd8c2ed85b57016dff65ac81": "676ee72066bc7a6ab2201369d3f4f05c",
".git/objects/25/0b6a6618d537fd3e309d788402e10191946ef0": "8734a48c8491304ea71dd5fa51dbe1e8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e93d894eeddfbaaab0264333cdb5e84",
".git/logs/refs/heads/main": "62810e0045da980661aa501663f44217",
".git/logs/refs/remotes/origin/main": "ca2746c9c87d6fc8a69bbf11a8193453",
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
".git/refs/heads/main": "c231860668a1a69b5d0e1e0593c9ecbc",
".git/refs/remotes/origin/main": "c231860668a1a69b5d0e1e0593c9ecbc",
".git/index": "48b1f92002fc146ccdbc32890cc707f5",
".git/COMMIT_EDITMSG": "162faab05f639720546ec691a7c0df59",
".git/FETCH_HEAD": "1f385b9555a79d066e78bcec874d0d45",
"assets/AssetManifest.json": "59c66c7ba91f9220f87a00cd6264908a",
"assets/NOTICES": "2993c31007efc0b914e8d2f27b2c8edf",
"assets/FontManifest.json": "6af1749a07d9cee9dca30c6b64fd5496",
"assets/AssetManifest.bin.json": "345ef48e518a09e4fe4f4f950961add9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1a1428e2632ad2c166eeb36d5e2c429f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0f475046d91301a139abbb10554b1b83",
"assets/fonts/MaterialIcons-Regular.otf": "441b1bc91198c3abc1467110e01f37e6",
"assets/assets/pdf/veroubezhdenie/osnovi_veri.pdf": "2b3de5320335e8f51a9ead0e45b9f20f",
"assets/assets/pdf/veroubezhdenie/vera_v_Allaha.pdf": "deeb49f9fb37134eb05b6112b0f5dada",
"assets/assets/pdf/namaz/molitva_namaz.pdf": "0a4cd61d658bed094cc8acd581b0a5f9",
"assets/assets/pdf/imenaAllaha/raqaiq.pdf": "1692a1558a8401c04cb08d646755eab6",
"assets/assets/pdf/imenaAllaha/imenaAllaha.pdf": "be14f8bce845382468639cd649fcb33f",
"assets/assets/pdf/favaid/favaid.pdf": "b8cecf46c95abd6ad69cc532b17b87fd",
"assets/assets/pdf/favaid/vabil.pdf": "2bb08fdc314cd0f35fc2c3a12becd9e8",
"assets/assets/pdf/rayad/mir_dzhinnov.pdf": "1a4617774bcade7f1422f2c06ede04e9",
"assets/assets/pdf/rayad/ray_ad.pdf": "8fe7fb9f779d6a9f348a4d94ccfc24db",
"assets/assets/pdf/rayad/Ostry_mech_razyaschikh_koldunov.pdf": "809723af7574be9dd3138ffeaf42e00c",
"assets/assets/pdf/rayad/mir_angelov.pdf": "05c78f1338775cf439b05195e31c1f21",
"assets/assets/pdf/rayad/sudniy_den.pdf": "3f0f9697a85b8e29d4491ef5a7dd458d",
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
"assets/assets/image/namaz/namaz.png": "7a7a33383dc2eda1cd8c0d8d4d93e175",
"assets/assets/image/imenaAllaha/imenaAllaha.png": "97550184200c47ea7c6a567b6e6d3b70",
"assets/assets/image/imenaAllaha/raqaiq.png": "2130506b12972b11b33202cd6c934621",
"assets/assets/image/favaid/favaid.png": "304e3c60e1b982829a4976c8c57d8995",
"assets/assets/image/favaid/vabil.png": "3a71d82a2a4764e9b2f95982c09d6e93",
"assets/assets/image/rayad/ostriy_mech.png": "2917ed4ed4e6c9f10038733aff9bf7a2",
"assets/assets/image/rayad/mir_dzhinnov.png": "e0e2a9a80aecfdeb965b5e028574ca04",
"assets/assets/image/rayad/ray_ad.png": "7e6493c27fac5319719cd9ef6f206f88",
"assets/assets/image/rayad/sudniy_den.png": "3915602fcd0dae4f89757ae6abb07e2f",
"assets/assets/image/rayad/mir_angelov.png": "53a194321095d9dd6c1d9fb11fd951bc",
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
"assets/assets/kausaricon.png": "350987fe9cb8d949008fbcc291f27a1e",
"assets/assets/fonts/Mirza-Regular.ttf": "fcb6cbcd657b5c54588eb07cdbf379d4",
"assets/assets/fonts/Mirza-Medium.ttf": "b3ca7d5c9bc0693beb110a3013435ca3",
"assets/assets/fonts/Mirza-Bold.ttf": "553c7a92717403ab11e5c074d6ec746b",
"assets/assets/fonts/ProtestGuerrilla-Regular.ttf": "81efc633875043744f08b16877be62d7",
"assets/assets/fonts/Mirza-SemiBold.ttf": "5ca7973ca1b11293c5effdc34852bfa9",
"assets/assets/thumbnail300.png": "14893ec3887f373800f7ce973be7ad5d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
