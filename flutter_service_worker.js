'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5d707be467da66108b315f0f076a0a3d",
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
