const STATIC_CACHE = "static";
const APP_SHELL = [
  "/",
  "/index.html",
  "/style/style.css",
  "/js/app.js",
  "/js/main.js",
  "/images/IconSR/512.png",
  "/js/main.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
  "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  
];

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then(cache => {
//       cache.addAll(assets);
//     })
//   );
// });

self.addEventListener("install", (e) => {
  console.log("entrando");
  const cacheStatic = caches
  .open(STATIC_CACHE)
  .then((cache) => cache.addAll(APP_SHELL));

  e.waitUntil(cacheStatic);
});

// self.addEventListener("fetch", fetchEvent => {
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then(res => {
//       return res || fetch(fetchEvent.request);
//     })
//   );
// });
self.addEventListener("fetch", (e) =>{
  console.log("fetch", e.request);

  e.respondWith(
    caches
    .match(e.request)
    .then(res => res || fetch(e.request))
    .catch(console.log)
  );
});
