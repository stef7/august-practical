!function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([function(t,e){var i,a,n=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function r(t){if(i===setTimeout)return setTimeout(t,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(t,0);try{return i(t,0)}catch(e){try{return i.call(null,t,0)}catch(e){return i.call(this,t,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(t){i=o}try{a="function"==typeof clearTimeout?clearTimeout:l}catch(t){a=l}}();var d,s=[],u=!1,h=-1;function c(){u&&d&&(u=!1,d.length?s=d.concat(s):h=-1,s.length&&m())}function m(){if(!u){var t=r(c);u=!0;for(var e=s.length;e;){for(d=s,s=[];++h<e;)d&&d[h].run();h=-1,e=s.length}d=null,u=!1,function(t){if(a===clearTimeout)return clearTimeout(t);if((a===l||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t);try{a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];s.push(new p(t,e)),1!==s.length||u||r(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(t,e,i){"use strict";var a,n=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),l=[];function r(t){for(var e=-1,i=0;i<l.length;i++)if(l[i].identifier===t){e=i;break}return e}function d(t,e){for(var i={},a=[],n=0;n<t.length;n++){var o=t[n],d=e.base?o[0]+e.base:o[0],s=i[d]||0,u="".concat(d," ").concat(s);i[d]=s+1;var h=r(u),c={css:o[1],media:o[2],sourceMap:o[3]};-1!==h?(l[h].references++,l[h].updater(c)):l.push({identifier:u,updater:y(c,e),references:1}),a.push(u)}return a}function s(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var n=i.nc;n&&(a.nonce=n)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var l=o(t.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(e)}return e}var u,h=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function c(t,e,i,a){var n=i?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=h(e,n);else{var o=document.createTextNode(n),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(o,l[e]):t.appendChild(o)}}function m(t,e,i){var a=i.css,n=i.media,o=i.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var p=null,g=0;function y(t,e){var i,a,n;if(e.singleton){var o=g++;i=p||(p=s(e)),a=c.bind(null,i,o,!1),n=c.bind(null,i,o,!0)}else i=s(e),a=m.bind(null,i,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var i=d(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<i.length;a++){var n=r(i[a]);l[n].references--}for(var o=d(t,e),s=0;s<i.length;s++){var u=r(i[s]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}i=o}}}},function(t){t.exports=JSON.parse('{"kind":"youtube#searchListResponse","etag":"cn0o9BpHJabuPcDrldcj8KVeG00","nextPageToken":"CBkQAA","regionCode":"AU","pageInfo":{"totalResults":1000000,"resultsPerPage":25},"items":[{"kind":"youtube#searchResult","etag":"4rwW8UesY7h6xlFskCYfYdXLTn8","id":{"kind":"youtube#video","videoId":"AoAm4om0wTs"},"snippet":{"publishedAt":"2020-05-22T17:00:09Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga, Ariana Grande - Rain On Me (Official Music Video)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica \\"RAIN ON ME” THE NEW SINGLE FROM LADY GAGA WITH ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/AoAm4om0wTs/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/AoAm4om0wTs/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/AoAm4om0wTs/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2020-05-22T17:00:09Z"}},{"kind":"youtube#searchResult","etag":"bYCSj7Dml0Re7OU_MVJchQkXPOY","id":{"kind":"youtube#video","videoId":"5L6xyaeiV58"},"snippet":{"publishedAt":"2020-02-28T05:00:00Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Stupid Love (Official Music Video)","description":"\\"RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA WITH ARIANA GRANDE OUT NOW http://smarturl.it/RainOnMeChromatica WATCH THE VIDEO: ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/5L6xyaeiV58/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/5L6xyaeiV58/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/5L6xyaeiV58/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2020-02-28T05:00:00Z"}},{"kind":"youtube#searchResult","etag":"fuqI-SrTjMAELOPUyIES0CwopcA","id":{"kind":"youtube#video","videoId":"qrO4YZeyl0I"},"snippet":{"publishedAt":"2009-11-24T08:15:30Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Bad Romance (Official Music Video)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/qrO4YZeyl0I/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/qrO4YZeyl0I/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/qrO4YZeyl0I/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2009-11-24T08:15:30Z"}},{"kind":"youtube#searchResult","etag":"_zfVkAnLVGFC1-el4UTruSRFm20","id":{"kind":"youtube#video","videoId":"bo_efYhYU2A"},"snippet":{"publishedAt":"2018-09-27T16:30:01Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga, Bradley Cooper - Shallow (from A Star Is Born) (Official Music Video)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/bo_efYhYU2A/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/bo_efYhYU2A/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/bo_efYhYU2A/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2018-09-27T16:30:01Z"}},{"kind":"youtube#searchResult","etag":"qPzx0AJCJTF3mOXMs1vg6y63VgQ","id":{"kind":"youtube#video","videoId":"bESGLojNYSo"},"snippet":{"publishedAt":"2009-12-20T03:05:36Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Poker Face (Official Music Video)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/bESGLojNYSo/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/bESGLojNYSo/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/bESGLojNYSo/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2009-12-20T03:05:36Z"}},{"kind":"youtube#searchResult","etag":"dcFPyVfAuA7tkcYNTlRlByC4bnQ","id":{"kind":"youtube#video","videoId":"EVBsypHzF3U"},"snippet":{"publishedAt":"2010-03-16T01:08:05Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Telephone ft. Beyoncé (Official Music Video)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/EVBsypHzF3U/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/EVBsypHzF3U/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/EVBsypHzF3U/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2010-03-16T01:08:05Z"}},{"kind":"youtube#searchResult","etag":"YpfGoLa9mbNyb0NxXbYCdsgMo5k","id":{"kind":"youtube#video","videoId":"wV1FrqwZyKw"},"snippet":{"publishedAt":"2011-02-28T01:54:42Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Born This Way (Official Music Video)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/wV1FrqwZyKw/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/wV1FrqwZyKw/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/wV1FrqwZyKw/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2011-02-28T01:54:42Z"}},{"kind":"youtube#searchResult","etag":"Hk9f8QLZoYkURXXOMFJs7O_05Y8","id":{"kind":"youtube#video","videoId":"niqrrmev4mA"},"snippet":{"publishedAt":"2010-06-08T08:21:46Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Alejandro","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/niqrrmev4mA/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/niqrrmev4mA/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/niqrrmev4mA/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2010-06-08T08:21:46Z"}},{"kind":"youtube#searchResult","etag":"WAMglDay0ic1jAp4PoZBZTmUanQ","id":{"kind":"youtube#video","videoId":"5vheNbQlsyU"},"snippet":{"publishedAt":"2018-11-09T05:00:01Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Always Remember Us This Way (from A Star Is Born) (Official Music Video)","description":"Listen to brand new music from Bradley Cooper & Lady Gaga from the \'A Star Is Born\' Soundtrack: http://smarturl.it/ASIBSoundtrack Get tickets to see the film: ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/5vheNbQlsyU/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/5vheNbQlsyU/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/5vheNbQlsyU/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2018-11-09T05:00:01Z"}},{"kind":"youtube#searchResult","etag":"ZuoBVj4lQiHDM4NX7uZxlmT24uc","id":{"kind":"youtube#video","videoId":"en2D_5TzXCA"},"snippet":{"publishedAt":"2016-12-14T20:05:00Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Million Reasons (Official Music Video)","description":"LADY GAGA / JOANNE NEW ALBUM / OUT NOW iTunes: http://gaga.lk/Joanne Apple Music: http://gaga.lk/JoanneAP Spotify: http://gaga.lk/JoanneSP Google ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/en2D_5TzXCA/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/en2D_5TzXCA/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/en2D_5TzXCA/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2016-12-14T20:05:00Z"}},{"kind":"youtube#searchResult","etag":"ZDiQLouCPz99oz0ooPColpEtB-w","id":{"kind":"youtube#video","videoId":"wagn8Wrmzuc"},"snippet":{"publishedAt":"2011-05-03T23:53:26Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Judas (Official Music Video)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/wagn8Wrmzuc/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/wagn8Wrmzuc/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/wagn8Wrmzuc/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2011-05-03T23:53:26Z"}},{"kind":"youtube#searchResult","etag":"gJqZySK3UAOvAaYVKlQa_XY1yIY","id":{"kind":"youtube#video","videoId":"GQ95z6ywcBY"},"snippet":{"publishedAt":"2010-03-11T23:21:55Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Telephone ft. Beyoncé (Explicit) (Official Music Video)","description":"LADY GAGA / JOANNE NEW ALBUM / OUT NOW iTunes: http://smarturl.it/Joanne Google Play: http://smarturl.it/Joanne.gp Amazon: http://smarturl.it/Joanne.amz ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/GQ95z6ywcBY/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/GQ95z6ywcBY/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/GQ95z6ywcBY/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2010-03-11T23:21:55Z"}},{"kind":"youtube#searchResult","etag":"JVFssGaQgsJ5vGRfdnWKkXYiB1U","id":{"kind":"youtube#video","videoId":"X9YMU0WeBwU"},"snippet":{"publishedAt":"2011-08-17T01:20:44Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Yoü And I (Official Music Video)","description":"LADY GAGA / JOANNE NEW ALBUM / OUT NOW iTunes: http://smarturl.it/Joanne Apple Music: http://smarturl.it/Joanne.ap Spotify: http://smarturl.it/Joanne.sp ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/X9YMU0WeBwU/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/X9YMU0WeBwU/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/X9YMU0WeBwU/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2011-08-17T01:20:44Z"}},{"kind":"youtube#searchResult","etag":"l7NpLBXyWoQinMizo5MmzskWWnA","id":{"kind":"youtube#video","videoId":"fnPn6At3v28"},"snippet":{"publishedAt":"2020-05-28T11:00:20Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga, BLACKPINK - Sour Candy (Audio)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/fnPn6At3v28/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/fnPn6At3v28/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/fnPn6At3v28/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2020-05-28T11:00:20Z"}},{"kind":"youtube#searchResult","etag":"iIWCLtqblhkGwi3wd0Vi31YbiMs","id":{"kind":"youtube#video","videoId":"QeWBS0JBNzQ"},"snippet":{"publishedAt":"2011-06-17T00:43:00Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - The Edge Of Glory (Official Music Video)","description":"LADY GAGA / JOANNE NEW ALBUM / OUT NOW iTunes: http://smarturl.it/Joanne Apple Music: http://smarturl.it/Joanne.ap Spotify: http://smarturl.it/Joanne.sp ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/QeWBS0JBNzQ/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/QeWBS0JBNzQ/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/QeWBS0JBNzQ/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2011-06-17T00:43:00Z"}},{"kind":"youtube#searchResult","etag":"X1qg5OtLRjPMUPuLwcdZBU_6F3k","id":{"kind":"youtube#video","videoId":"Xn599R0ZBwg"},"snippet":{"publishedAt":"2016-09-21T02:00:00Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Perfect Illusion (Official Music Video)","description":"LADY GAGA / JOANNE NEW ALBUM / OUT NOW iTunes: http://gaga.lk/Joanne Apple Music: http://gaga.lk/JoanneAP Spotify: http://gaga.lk/JoanneSP Google ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/Xn599R0ZBwg/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/Xn599R0ZBwg/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/Xn599R0ZBwg/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2016-09-21T02:00:00Z"}},{"kind":"youtube#searchResult","etag":"eqsY2JS81zYH3xJRuWn6W98o7mo","id":{"kind":"youtube#video","videoId":"ugQhauUEcJM"},"snippet":{"publishedAt":"2020-05-22T04:00:27Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga, Ariana Grande - Rain On Me (Audio)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/ugQhauUEcJM/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/ugQhauUEcJM/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/ugQhauUEcJM/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2020-05-22T04:00:27Z"}},{"kind":"youtube#searchResult","etag":"1cJ4H6Q0NPiTaXyr3fK6IkvKAvw","id":{"kind":"youtube#video","videoId":"JPJjwHAIny4"},"snippet":{"publishedAt":"2019-02-25T20:40:22Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga, Bradley Cooper - Shallow (From A Star Is Born/Live From The Oscars)","description":"CHROMATICA” THE SIXTH ALBUM BY LADY GAGA OUT NOW http://smarturl.it/Chromatica “RAIN ON ME” THE NEW SINGLE & VIDEO FROM LADY GAGA ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/JPJjwHAIny4/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/JPJjwHAIny4/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/JPJjwHAIny4/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2019-02-25T20:40:22Z"}},{"kind":"youtube#searchResult","etag":"WdGArxy8ZvHlhFxxTux87NAaPvg","id":{"kind":"youtube#video","videoId":"X5Cfi7U4eL4"},"snippet":{"publishedAt":"2016-10-26T06:24:09Z","channelId":"UCJ0uqCI0Vqr2Rrt1HseGirg","title":"Lady Gaga Carpool Karaoke","description":"Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album, \\"Joanne\\" before James tries on some of her classic ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/X5Cfi7U4eL4/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/X5Cfi7U4eL4/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/X5Cfi7U4eL4/hqdefault.jpg","width":480,"height":360}},"channelTitle":"The Late Late Show with James Corden","liveBroadcastContent":"none","publishTime":"2016-10-26T06:24:09Z"}},{"kind":"youtube#searchResult","etag":"cowd-VBJw8x0GXjr2gRRiOqIxgU","id":{"kind":"youtube#video","videoId":"52nfjRzIaj8"},"snippet":{"publishedAt":"2018-10-26T03:44:56Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"I&#39;ll Never Love Again (from A Star Is Born) (Official Music Video)","description":"Listen to brand new music from Bradley Cooper & Lady Gaga from the \'A Star Is Born\' Soundtrack: http://smarturl.it/ASIBSoundtrack Get tickets to see the film: ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/52nfjRzIaj8/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/52nfjRzIaj8/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/52nfjRzIaj8/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2018-10-26T03:44:56Z"}},{"kind":"youtube#searchResult","etag":"JE8DcH6ZNeSXqttIXOSbDeEHCF4","id":{"kind":"youtube#video","videoId":"cCNM706Iv8M"},"snippet":{"publishedAt":"2020-04-19T02:18:51Z","channelId":"UCg3_C7BwcV0kBlJbBFHTPJQ","title":"Lady Gaga performs &quot;Smile&quot; | One World: Together At Home","description":"Lady Gaga performs \\"Smile\\" during One World: Together At Home on April 18. Global Citizen is a social action platform...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/cCNM706Iv8M/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/cCNM706Iv8M/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/cCNM706Iv8M/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Global Citizen","liveBroadcastContent":"none","publishTime":"2020-04-19T02:18:51Z"}},{"kind":"youtube#searchResult","etag":"j9dCXKGzVyPlZEmxyFpmMurw7F0","id":{"kind":"youtube#video","videoId":"cggNqDAtJYU"},"snippet":{"publishedAt":"2011-12-02T08:42:42Z","channelId":"UC07Kxew-cMIaykMOkzqHtBQ","title":"Lady Gaga - Marry The Night (Official Music Video)","description":"LADY GAGA / JOANNE NEW ALBUM / OUT NOW iTunes: http://smarturl.it/Joanne Apple Music: http://smarturl.it/Joanne.ap Spotify: http://smarturl.it/Joanne.sp ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/cggNqDAtJYU/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/cggNqDAtJYU/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/cggNqDAtJYU/hqdefault.jpg","width":480,"height":360}},"channelTitle":"LadyGagaVEVO","liveBroadcastContent":"none","publishTime":"2011-12-02T08:42:42Z"}},{"kind":"youtube#searchResult","etag":"ZUmVG-1r38GZjFQH8kP-n2gio7I","id":{"kind":"youtube#video","videoId":"p1godKRBeZc"},"snippet":{"publishedAt":"2018-11-20T22:29:13Z","channelId":"UCZWD9RF0ME7InJlsIkY-5qg","title":"Lady Gaga - Always Remember Us This Way ( Lyrics Video )","description":"Lady Gaga - Always Remember Us This Way ♪♫♬ I do not own anything. All credits go to the right owners. No copyright intended. Lady Gaga - Always ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/p1godKRBeZc/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/p1godKRBeZc/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/p1godKRBeZc/hqdefault.jpg","width":480,"height":360}},"channelTitle":"KeepMyWords","liveBroadcastContent":"none","publishTime":"2018-11-20T22:29:13Z"}},{"kind":"youtube#searchResult","etag":"udIBJzf2FOtd3gqiXWIRlfgi86w","id":{"kind":"youtube#video","videoId":"O8z7q4uPL60"},"snippet":{"publishedAt":"2019-02-25T15:17:28Z","channelId":"UCAAmkc2sRESFoEtiKRTaTRA","title":"Lady Gaga and Bradley Cooper perform &#39;Shallow&#39; from &#39;A Star Is Born&#39;","description":"Lady Gaga and Bradley Cooper perform \'Shallow\' from \'A Star Is Born\'","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/O8z7q4uPL60/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/O8z7q4uPL60/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/O8z7q4uPL60/hqdefault.jpg","width":480,"height":360}},"channelTitle":"News 5 Cleveland","liveBroadcastContent":"none","publishTime":"2019-02-25T15:17:28Z"}},{"kind":"youtube#searchResult","etag":"rAbQwS9Tlxd0x5S4RJHqU89VlW0","id":{"kind":"youtube#video","videoId":"kx_uCdTRCAw"},"snippet":{"publishedAt":"2019-12-04T21:17:15Z","channelId":"UCzTKskwIc_-a0cGvCXA848Q","title":"Doing LADY GAGA&#39;S Makeup! | NikkieTutorials","description":"I AM DOING LADY GAGA\'S MAKEUP with her new HAUS LABORATORIES GLAM ROOM PALETTE No. 1: FAME!!!!! The queen of pop sits down to get her glam ...","thumbnails":{"default":{"url":"https://i.ytimg.com/vi/kx_uCdTRCAw/default.jpg","width":120,"height":90},"medium":{"url":"https://i.ytimg.com/vi/kx_uCdTRCAw/mqdefault.jpg","width":320,"height":180},"high":{"url":"https://i.ytimg.com/vi/kx_uCdTRCAw/hqdefault.jpg","width":480,"height":360}},"channelTitle":"NikkieTutorials","liveBroadcastContent":"none","publishTime":"2019-12-04T21:17:15Z"}}]}')},,,,function(t,e,i){(function(t){i(7);const e={};console.debug("a3 start",{process:t}),function(t,a){const n=a.documentElement,o=a.getElementById("toggle"),l=a.getElementById("form"),r=a.getElementById("search"),d=a.getElementById("results"),s=a.getElementById("saved"),u=a.getElementById("play"),h=a.getElementById("goback"),c=t=>t?t.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;"):t,m=t=>new Function("o",`const e = ${c}; return \`${t}\`;`),p=t=>{const e=a.getElementById(t),i=e.innerHTML;return e.remove(),i};d._template=p("result-tmpl"),s._template=p("saved-tmpl"),u._srcTemplate=p("play-src-tmpl"),u._template=p("play-tmpl");const g={},y=t=>t.forEach(t=>g[t.id]=t);let f;const A=()=>{n.classList.add("search-loading"),setTimeout(()=>n.classList.remove("search-loading"),100)};u._initialHTML=u.innerHTML;const v=()=>{n.classList.remove("player-open")};let T;const b=t=>{const e=t.currentTarget._item;f!==e&&(t=>{T?T.src=m(u._srcTemplate)(t):(u.innerHTML=m(u._template)({...t,src:m(u._srcTemplate)(t)}),T=u.children[0]),f=t})(e),n.classList.add("player-open")};let w,I={};const L=()=>{const t=I.items.map(t=>t.id);return w=new RegExp("^("+t.join("|")+")$")},O=t=>w.test(t),M=()=>{const t=JSON.stringify(I.items);return I.str!==t&&(I.str=t,localStorage.setItem("saved",t),L(),!0)},E=()=>{const t=localStorage.getItem("saved");return I.str!==t&&(I.str=t,I.items=t&&JSON.parse(t)||[],L(),y(I.items),!0)},G=()=>{E()&&(N(s,I.items),C())},B=(t,e)=>{("boolean"==typeof e?e:O(t._item.id))?(t.classList.add("saved"),t.title=t.title.replace(/^Save/,"Unsave")):(t.classList.remove("saved"),t.title=t.title.replace(/^Unsave/,"Save"))},C=(t,e,i=a)=>{let n=[...i.getElementsByClassName("save-video")];t&&(n=n.filter(e=>e._item.id===t)),n.forEach(t=>B(t,e))},k=t=>{const e=t.currentTarget._item.id;let i=O(e);i?(t=>{const e=I.items.indexOf(g[t]);I.items.splice(e,1),M(),N(s,I.items)})(e):(t=>{I.items.unshift(g[t]),M(),N(s,I.items)})(e),C(e,!i)};d._initialHTML=d.innerHTML,s._initialHTML=s.innerHTML;const N=(t,e)=>{e&&e.length?(t.innerHTML=e.map(e=>m(t._template)(e)).join(""),[...t.children].forEach(t=>{const e=t.getAttribute("data-id"),i=t.getElementsByClassName("play-video")[0];i._item=g[e],i.addEventListener("click",b,!1);const a=t.getElementsByClassName("save-video")[0];a._item=g[e],(t=>{t.addEventListener("click",k,!1)})(a),B(a)})):t.innerHTML=t._initialHTML},j=new URL("https://www.googleapis.com/youtube/v3/search"),U=j.searchParams;let R,q;U.set("key","AIzaSyByKVyGVMgrBeyANVC-gXcYujHPCeb1sTc"),U.set("type","video"),U.set("part","snippet"),U.set("maxResults",25);const H=a=>{if(a.items){const t=a.items.map(t=>(t=>({id:t.id.videoId,title:t.snippet.title,channel:t.snippet.channelTitle,img:t.snippet.thumbnails.medium.url}))(t));y(t),d.scrollTop=0,N(d,t)}else a.error&&(console.error("search request failed:",a.error),t._useTestData=()=>H(e.data||i(2)),d.innerHTML=`\n\t\t\t\t<li>Error: ${a.error.message}</li>\n\t\t\t\t<li><a href="javascript:window._useTestData();">Use test data</a></li>\n\t\t\t`);q=null,n.classList.remove("search-loading")},S=t=>{t.preventDefault(),n.classList.toggle("saved-open")},V=a=>{var o;return a&&a.preventDefault(),n.classList.remove("saved-open"),n.classList.remove("player-open"),(o=r.value)==R?A():(R=o,o&&o.trim()?(q&&q.abort(),q=new AbortController,U.set("q",o),n.classList.add("search-loading"),"object"==typeof e.error?(console.warn("using testError instead of API call/response:",e.error),H(e.error)):"object"==typeof e.data?(console.warn("using testData instead of API call/response:",e.data),H(e.data)):fetch(j.href,{signal:q.signal}).then(t=>t.json()).then(H).catch(a=>{console.error("search request failed:",a),t._useTestData=()=>H(e.data||i(2)),d.innerHTML=`\n\t\t\t\t\t<li>Error: ${a&&a.message||a}</li>\n\t\t\t\t\t<li><a href="javascript:window._useTestData();">Use test data</a></li>\n\t\t\t\t`,q=null,n.classList.remove("search-loading")})):(d.innerHTML=d._initialHTML,A())),!1};t.addEventListener("storage",G,!1),o.addEventListener("click",S,!1),h.addEventListener("click",v,!1),l.addEventListener("submit",V,!0),E(),N(s,I.items),console.debug("a3 init")}(window,document)}).call(this,i(0))},function(t,e,i){var a=i(1),n=i(8);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);t.exports=n.locals||{}},function(t,e,i){}]);