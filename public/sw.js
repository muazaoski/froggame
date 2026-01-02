// Service Worker - NO CACHING (Debug Mode)
// All requests go directly to network

self.addEventListener('install', (event) => {
    // Skip waiting - activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Clear ALL caches
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.map((key) => caches.delete(key)));
        })
    );
});

self.addEventListener('fetch', (event) => {
    // Do nothing - let all requests go to network
    // This effectively disables the service worker caching
    return;
});
