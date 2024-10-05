'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-192x192.png": "b7dc3b5320ecd9f61049d2a5cff1b360",
"android-chrome-512x512.png": "983e7bb4010cd46225086d2a07ae7f1a",
"apple-touch-icon.png": "648eab2b6629ecd4d8ab3673311f8e6d",
"assets/AssetManifest.bin": "f460d02f0de9d2573443086984ac6e34",
"assets/AssetManifest.bin.json": "7d9280678fe4caf76e1d0e4acef24800",
"assets/AssetManifest.json": "baebb6fa639ba63a0c0b1b6530c35644",
"assets/assets/background_image.jpg": "494e69791b183df531527e622790a190",
"assets/assets/location.png": "c66d6d62866152359bbe8a245f04d5ed",
"assets/assets/locD.png": "033b669870b9e238853ff1f5cfa20176",
"assets/assets/profile.png": "445336e9f18b3a301702fd11143a8cc4",
"assets/assets/ss/appleMusic.jpg": "3bfb535561d59f426bcc4d0d8ca9b84e",
"assets/assets/ss/calc.jpg": "a5a99b612e58d79fa07bf9f498cc1586",
"assets/assets/ss/portWeb.jpg": "2facbefc30fb7b09d2f9acf65394e467",
"assets/assets/ss/stopWatch.jpg": "d406b4c29098b040d43684bac289277e",
"assets/assets/ss/ticTac.jpg": "c4755298de95cc16b2ccbbe1a378aa22",
"assets/assets/ss/toDo.jpg": "46f14714359a7cdb1c5c357cf97e79c1",
"assets/assets/ss/weather.jpg": "828a37e598ed47b8230309210b14a126",
"assets/assets/svg/blender.svg": "fb6f37cb6b870a83ec23e7a709910e4c",
"assets/assets/svg/cpp.svg": "662ae5fa986d4a981b1584d6c15feb1d",
"assets/assets/svg/css.svg": "c2c473ba42f40abfd791c2f00662cdbb",
"assets/assets/svg/dart.svg": "9bdebce5ff1d66b398d9ffccd878a5e3",
"assets/assets/svg/figma.svg": "5fd52845a776200afd282c0488af6f2d",
"assets/assets/svg/flutter.svg": "ea67ff4e8060634c0008c912a810338e",
"assets/assets/svg/framer.svg": "5d0f449e36a5402b819312beea001086",
"assets/assets/svg/github.svg": "8dc66f6f6f62dcd1661b79ac93910a05",
"assets/assets/svg/hackerrank.svg": "6092c56079b99b2302eac7028a1fced8",
"assets/assets/svg/html.svg": "60355ba2b28d03b4e5309a326de1bfde",
"assets/assets/svg/instagram.svg": "8e8d554c282bd215a21fa0bcf813f097",
"assets/assets/svg/java.svg": "75a65c8b77e5bf849af04338806b1e0c",
"assets/assets/svg/javascript.svg": "50b1f12e766978b8b947c986193a175b",
"assets/assets/svg/linkedin.svg": "ebf40b1ee1e9204dac2f11148b0bcd9a",
"assets/assets/svg/mysql.svg": "863dfa17a3cdb94115c3b1204b98b164",
"assets/assets/svg/python.svg": "76863e22804f3ff7ad5aa94ae007feee",
"assets/assets/svg/x.svg": "591d75f49453af0b3701f0503b445b6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9af10da9680ce5647069c9bd8182e835",
"assets/NOTICES": "3d092ef7831732ad610ea275c962135c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon-16x16.png": "ffd9b412da086094721d22da80ba7845",
"favicon-32x32.png": "e9a942e97f590b86ad272037c0aed5d9",
"favicon.ico": "5d6852736c596a5d586ef9901dbf4ce3",
"favicon.png": "e9a942e97f590b86ad272037c0aed5d9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9d32a5af802f60638e8245156dfec64a",
"index.html": "f647e91c0dadfb53acccb4bc67b08b1e",
"/": "f647e91c0dadfb53acccb4bc67b08b1e",
"main.dart.js": "a74a569d22c7b2c2aa2cb89c4f886964",
"manifest.json": "09e0923360d1c841b5f3d8cb2e834877",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "aeac712ceeba1c13ec39a61c2d7f03bc"};
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
