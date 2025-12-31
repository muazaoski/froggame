const CACHE_NAME = 'frog-v2'; // Bump version to invalidate old cache

self.addEventListener('install', (event) => {
    // Skip waiting - activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Clear old caches
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    // For HTML - always fetch from network (never cache)
    if (event.request.mode === 'navigate' || event.request.url.endsWith('.html')) {
        event.respondWith(fetch(event.request));
        return;
    }

    // For other assets - network first, fallback to cache
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
