"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/zuher1.github.io/042c90e13c7f3d449dbcc23f7d25ebaf.woff","042c90e13c7f3d449dbcc23f7d25ebaf"],["/zuher1.github.io/448c34a56d699c29117adc64c43affeb.woff2","448c34a56d699c29117adc64c43affeb"],["/zuher1.github.io/575bf7f44a6fc665f63b255e72e7cb78.woff2","575bf7f44a6fc665f63b255e72e7cb78"],["/zuher1.github.io/674f50d287a8c48dc19ba404d20fe713.eot","674f50d287a8c48dc19ba404d20fe713"],["/zuher1.github.io/912ec66d7572ff821749319396470bde.svg","912ec66d7572ff821749319396470bde"],["/zuher1.github.io/af7ae505a9eed503f8b8e6982036873e.woff2","af7ae505a9eed503f8b8e6982036873e"],["/zuher1.github.io/b06871f281fee6b241d60582ae9369b9.ttf","b06871f281fee6b241d60582ae9369b9"],["/zuher1.github.io/e18bbf611f2a2e43afc071aa2f4e1512.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/zuher1.github.io/e45d8975e01ac4fffb5dd6743073c324.ttf","e45d8975e01ac4fffb5dd6743073c324"],["/zuher1.github.io/f44512c065920ca2df45b72ea2ca94d7.woff2","f44512c065920ca2df45b72ea2ca94d7"],["/zuher1.github.io/f4769f9bdb7466be65088239c12046d1.eot","f4769f9bdb7466be65088239c12046d1"],["/zuher1.github.io/f721466883998665b87923b92dea655b.svg","f721466883998665b87923b92dea655b"],["/zuher1.github.io/fa2772327f55d8198301fdb8bcfc8158.woff","fa2772327f55d8198301fdb8bcfc8158"],["/zuher1.github.io/fee66e712a8a08eef5805a46892932ad.woff","fee66e712a8a08eef5805a46892932ad"],["/zuher1.github.io/index.html","ec74730d10dd0b0804c0c80d10d5fa98"],["/zuher1.github.io/static/css/main.1271bd0e.css","d7ef0fd2517bfc69833b0d1b79c6295a"],["/zuher1.github.io/static/js/main.ba6c85f7.js","19040336eafe5646aadbf004c35ca5d8"],["/zuher1.github.io/static/media/landscape.27bd83ec.jpg","27bd83ec2b9ca52154c1ebf17364dd07"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/zuher1.github.io/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});