const CACHE='bampton-fair-pilot-v2';
const SHELL=['./index.html','./manifest.webmanifest','./'];
self.addEventListener('install',event=>{
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.add('./index.html');
  await Promise.allSettled(['./manifest.webmanifest','./'].map(path=>cache.add(path)));
  await self.skipWaiting();
 })());
});
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('bampton-fair-pilot-')&&k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
 })());
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 if(req.mode==='navigate'){
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE);
   const fallback=await cache.match('./index.html');
   try{const response=await fetch(req);if(response.ok)await cache.put('./index.html',response.clone());return response}
   catch(e){if(fallback)return fallback;throw e}
  })());return;
 }
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const cached=await cache.match(req);
  if(cached)return cached;
  return fetch(req);
 })());
});