/* eslint-disable */
const DEBUG_ENABLED = false;

function debug() {
  if (DEBUG_ENABLED) return console.log.apply(console, arguments);
}

const CACHE_VERSION = 1;
debug('[SERVICE WORKER] Current cache version : ', CACHE_VERSION);

const CACHE_NAME = `nachocode-${CACHE_VERSION}`;
debug('[SERVICE WORKER] Current cache name : ', CACHE_NAME);

const CACHE_ITEMS = [
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/android-chrome-48x48.png',
  '/android-chrome-72x72.png',
  '/android-chrome-96x96.png',
  '/android-chrome-144x144.png',
  '/android-chrome-168x168.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
];

const installEvent = event => {
  debug(
    '[ServiceWorker] Handling install event. Resources to prefetch:',
    CACHE_ITEMS
  );

  const now = Date.now();

  event.waitUntil(
    // Open a cache of resources
    caches
      .open(CACHE_NAME)
      .then(cache => {
        const cachePromises = CACHE_ITEMS.map(cacheItem => {
          // Constructs a new URL with relative paths.
          const url = new URL(cacheItem, location.href);
          // Append a cache-bust=TIMESTAMP to each query string.
          url.search += `${url.search ? '&' : '?'}cache-bust=${now}`;
          // Set drawback to make cross-origin opaque
          const request = new Request(url, { mode: 'no-cors' });
          return fetch(request).then(response => {
            if (response.status >= 400) {
              return console.error(
                `[ServiceWorker] request for ${cacheItem} failed with status: `,
                response.statusText
              );
            }
            // Use the original URL without the cache-busting parameter
            return cache.put(cacheItem, response);
          });
        });

        return Promise.all(cachePromises).then(() => {
          debug('[ServiceWorker] Pre-fetching complete.');
        });
      })
      .catch(console.error)
      .then(self.skipWaiting())
  );
};

const fetchEvent = async event => {
  debug('[ServiceWorker] Handling fetch event for: ', event.request.url);

  event.respondWith(
    // Check the request with cache
    caches.match(event.request).then(cachedResponse => {
      // If matched, get the response
      if (cachedResponse) {
        debug('[ServiceWorker] Found response in cache:', cachedResponse);

        // respond with cached response
        return cachedResponse;
      }

      debug(
        '[ServiceWorker] No response found in cache. About to fetch from network...'
      );

      // Fetch from network
      return fetch(event.request)
        .then(fetchedResponse => {
          debug('[ServiceWorker] Response from network is:', fetchedResponse);
          // Respond with fetched response from network
          return fetchedResponse;
        })
        .catch(function (error) {
          console.error('[ServiceWorker] Fetching failed: ', error);
        });
    })
  );
};

const activateEvent = event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              // If cache name isn't same with CACHE_NAME
              debug('[ServiceWorker] Removing old cache: ', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .catch(console.error)
      .then(() => self.clients.claim())
      .catch(console.error)
  );
};

// install event binding
self.addEventListener('install', installEvent);
// fetch event binding
self.addEventListener('fetch', fetchEvent);
// activate event binding
self.addEventListener('activate', activateEvent);
