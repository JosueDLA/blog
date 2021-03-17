/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-430e7516c5ba28bb2fa7.js"
  },
  {
    "url": "framework-d197a39db04c1b3f76c8.js"
  },
  {
    "url": "styles.4101032c7a0606f79b78.css"
  },
  {
    "url": "app-8d7ffc3a39ab412ebedf.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a108d7ffa3cb33655324edb7033ce59f"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-df8bb7a439f70a910785.js"
  },
  {
    "url": "polyfill-1fbb6991ecb352e44693.js"
  },
  {
    "url": "1bfc9850-2205f08f552fbcf517ce.js"
  },
  {
    "url": "5e2a4920-57c854c74c30e9d3b478.js"
  },
  {
    "url": "6728d85a-5c7c714d0773ea6facd6.js"
  },
  {
    "url": "7713f8c3c4067ddc8348845fe5a68aaf0a3fbaa6-6f366c44db7f4ed803d8.js"
  },
  {
    "url": "component---src-pages-index-tsx-0e4ff2db7e1b1c256cfe.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "bc3f428ed0009ed74b2f15d10fec39f5"
  },
  {
    "url": "page-data/sq/d/4102384782.json",
    "revision": "d9ecec2a277405400d74b44b2391ba17"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5390977a012609dc365d9eb5b46db971"
  },
  {
    "url": "component---src-templates-all-posts-tsx-224ac9ab7d8072a20af7.js"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "c44cfbc1e47a05e35edada148a7d2043"
  },
  {
    "url": "0c428ae2-e49c5469f13807d67d03.js"
  },
  {
    "url": "component---src-templates-single-post-tsx-9eb8ea38da7cf1f6d28f.js"
  },
  {
    "url": "page-data/blog/basic-odoo-module/page-data.json",
    "revision": "39835471b4d7388af5593511dbe1ba8b"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "440a7696bcf7830f65ebb10332aa288c"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "a6d4b01d0da454ff5091d27e8ceee01a"
  },
  {
    "url": "page-data/blog/introduction-to-pipenv/page-data.json",
    "revision": "42b290b0aa1dd44b38f2ef6d5286c668"
  },
  {
    "url": "page-data/blog/raspberry-pi-pbx/page-data.json",
    "revision": "cadb126f7e875b6544127cb8d371baa5"
  },
  {
    "url": "page-data/projects/real-time-store/page-data.json",
    "revision": "071274a2c69860500fceaa75beba9abc"
  },
  {
    "url": "page-data/projects/weather-bot/page-data.json",
    "revision": "6d127cb597f7b6ac3ddd31474da4aa66"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3c54248d1d6255d95b8f11f3220659d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-8d7ffc3a39ab412ebedf.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)