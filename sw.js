importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "97851725e24fb681cf0cf87c9621210c"
  },
  {
    "url": "inline.7f7d398a48ac2d8f2017.bundle.js",
    "revision": "24004c5a8bd8a5f1fda88135ac10c397"
  },
  {
    "url": "main.0fc6b5bf1a11c6b33516.bundle.js",
    "revision": "da4b33c9011128bbba95cb642562f306"
  },
  {
    "url": "polyfills.337db143b9a9630c10a6.bundle.js",
    "revision": "854491caff7a7052a578c365385da5a6"
  },
  {
    "url": "styles.b92399fbcd586e52bf79.bundle.css",
    "revision": "b92399fbcd586e52bf793e41aad3cff8"
  },
  {
    "url": "vendor.bbbdbd9503d40cfbf38f.bundle.js",
    "revision": "e0847ad244ffd375ee6f2ddefe1faebc"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "1f99f78618fa620e511819c09c8c9db6"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
