self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    return caches.delete(key);
                })
            );
        }).then(() => {
            clients.claim();
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(error => {
            console.error('Fetch failed:', error);
            throw error;
        })
    );
});
