var p="function"==typeof Object.defineProperties?Object.defineProperty:function(c,a,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");c!=Array.prototype&&c!=Object.prototype&&(c[a]=e.value)},t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function u(){u=function(){};t.Symbol||(t.Symbol=B)}var C=0;function B(c){return"jscomp_symbol_"+(c||"")+C++}
function D(){u();var c=t.Symbol.iterator;c||(c=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&p(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return E(this)}});D=function(){}}function E(c){var a=0;return G(function(){return a<c.length?{done:!1,value:c[a++]}:{done:!0}})}function G(c){D();c={next:c};c[t.Symbol.iterator]=function(){return this};return c}function I(c){D();var a=c[Symbol.iterator];return a?a.call(c):E(c)}
function J(c,a){if(a){for(var e=t,d=c.split("."),g=0;g<d.length-1;g++){var b=d[g];b in e||(e[b]={});e=e[b]}d=d[d.length-1];g=e[d];b=a(g);b!=g&&null!=b&&p(e,d,{configurable:!0,writable:!0,value:b})}}
J("Promise",function(c){function a(b){this.c=0;this.j=void 0;this.b=[];var a=this.h();try{b(a.resolve,a.reject)}catch(m){a.reject(m)}}function e(){this.a=null}if(c)return c;e.prototype.m=function(b){null==this.a&&(this.a=[],this.w());this.a.push(b)};e.prototype.w=function(){var b=this;this.o(function(){b.B()})};var d=t.setTimeout;e.prototype.o=function(b){d(b,0)};e.prototype.B=function(){for(;this.a&&this.a.length;){var b=this.a;this.a=[];for(var a=0;a<b.length;++a){var c=b[a];delete b[a];try{c()}catch(q){this.A(q)}}}this.a=
null};e.prototype.A=function(b){this.o(function(){throw b;})};a.prototype.h=function(){function b(b){return function(l){c||(c=!0,b.call(a,l))}}var a=this,c=!1;return{resolve:b(this.F),reject:b(this.i)}};a.prototype.F=function(b){if(b===this)this.i(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof a)this.G(b);else{var c;a:switch(typeof b){case "object":c=null!=b;break a;case "function":c=!0;break a;default:c=!1}c?this.D(b):this.s(b)}};a.prototype.D=function(b){var a=void 0;
try{a=b.then}catch(m){this.i(m);return}"function"==typeof a?this.H(a,b):this.s(b)};a.prototype.i=function(b){this.u(2,b)};a.prototype.s=function(b){this.u(1,b)};a.prototype.u=function(b,a){if(0!=this.c)throw Error("Cannot settle("+b+", "+a|"): Promise already settled in state"+this.c);this.c=b;this.j=a;this.C()};a.prototype.C=function(){if(null!=this.b){for(var b=this.b,a=0;a<b.length;++a)b[a].call(),b[a]=null;this.b=null}};var g=new e;a.prototype.G=function(a){var b=this.h();a.g(b.resolve,b.reject)};
a.prototype.H=function(a,c){var b=this.h();try{a.call(c,b.resolve,b.reject)}catch(q){b.reject(q)}};a.prototype.then=function(b,c){function e(a,b){return"function"==typeof a?function(b){try{d(a(b))}catch(w){g(w)}}:b}var d,g,l=new a(function(a,b){d=a;g=b});this.g(e(b,d),e(c,g));return l};a.prototype["catch"]=function(a){return this.then(void 0,a)};a.prototype.g=function(a,c){function b(){switch(e.c){case 1:a(e.j);break;case 2:c(e.j);break;default:throw Error("Unexpected state: "+e.c);}}var e=this;null==
this.b?g.m(b):this.b.push(function(){g.m(b)})};a.resolve=function(b){return b instanceof a?b:new a(function(a){a(b)})};a.reject=function(b){return new a(function(a,c){c(b)})};a.race=function(b){return new a(function(c,e){for(var d=I(b),g=d.next();!g.done;g=d.next())a.resolve(g.value).g(c,e)})};a.all=function(b){var c=I(b),e=c.next();return e.done?a.resolve([]):new a(function(b,d){function g(a){return function(c){l[a]=c;m--;0==m&&b(l)}}var l=[],m=0;do l.push(void 0),m++,a.resolve(e.value).g(g(l.length-
1),d),e=c.next();while(!e.done)})};a.$jscomp$new$AsyncExecutor=function(){return new e};return a});function K(c,a){D();c instanceof String&&(c+="");var e=0,d={next:function(){if(e<c.length){var g=e++;return{value:a(g,c[g]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}J("Array.prototype.keys",function(c){return c?c:function(){return K(this,function(a){return a})}});
J("Array.prototype.entries",function(c){return c?c:function(){return K(this,function(a,c){return[a,c]})}});(function(c,a,e,d){function g(){return Math.round(Date.now()/1E3)}function b(a){if(a)return isNaN(parseInt(a))?(a=Date.parse(a),isNaN(a)?void 0:Math.round(a/1E3)):a}function l(a){return c.l().then(function(b){return b.match(a)}).then(function(a){if(a){var c=a.headers.get("x-o10n-exp");if(c)var n=a.headers.get("x-o10n-sw");c&&n<g()-c?a=!1:((c=a.headers.get("expire"))&&(c=b(c)),c&&c<g()&&(a=!1))}return a})}function m(a,b,k){c.l().then(function(c){var h={};b.headers.forEach(function(a,b){h[b]=a});h["x-o10n-sw"]=
g();if(k&&k[14])h["x-o10n-sw-exp"]=k[14];else{var f=b.headers.get("cache-control");f&&(f=w.exec(f))&&f[1]&&(h["x-o10n-sw-exp"]=parseInt(f[1]))}return b.blob().then(function(f){f=new Response(f,{status:b.status,statusText:b.statusText,headers:h});return c.put(a,f)})})}function q(a,b,c,e){b instanceof Array||(b=[b]);for(var h,f,k,r,d=0,g=b.length;d<g;d++){f=b[d];if("object"==typeof f){if(f[16]&&(k=parseFloat(a),r=parseFloat(f[17]),!isNaN(k)&&!isNaN(r)))switch(f[16]){case "<":h=k<r;break;case ">":h=
k>r;break;case "=":h=k===r}}else if(c){if(f=f.match(M)){try{var n=new RegExp(f[1],f[2])}catch(Q){}f=n||!1}else f=void 0;f&&(h=f.test(a))}else h=-1!==a.indexOf(f);if(h)return e?!h:h}return h}function F(a,b,k){return new Promise(function(e){var h,f=new Promise(function(a){h=a});c.v.forEach(function(b){f=f.then(b[a])});f.then(function(){e([b,k])});h([b,k])})}function N(b){b=new Request(b);var c=b.url;return F(0,b,{15:null}).then(function(b){var e=b[0],h=b[1];e.headers.set("x-o10n-sw",1);return a(e).then(function(a){return F(1,
a).then(function(a){a=a[0];var b;if((b=a.ok&&400>a.status)&&(b=h)&&!(b=!h[15]))a:{b=h[15];var f=!1,k=[],d,g,n=(33).toString(),O=(32).toString();b instanceof Array||(b=[]);for(var x=0,P=b.length;x<P;x++)if(d=b[x],!k.length||d[20]){g=null;switch(d[21].toString()){case n:g=q(c,d[22],d[25],d[20]);break;case O:if(value=a.headers.get(d[18].toLowerCase()))g=q(value,d[22],d[25],d[20]);else if(d[23]){b=!1;break a}}if("boolean"===typeof g)if(g)k.push(d),f=!0;else{b=!1;break a}}b=f}b&&m(e,a.clone(),h);return a})})["catch"](function(){return null})})}
function L(){y||z&&!(z<g()-10)||(y=!0,z=g(),caches.keys().then(function(a){return a&&0!==a.length?Promise.all(a.map(function(a){if(0===a.indexOf("o10n")){if(0!==a.indexOf(v))return caches["delete"](a);caches.open(a).then(function(a){a.keys().then(function(b){if(!(b.length<A)){var c=[],f=[],d=[];b.forEach(function(b){f.push(b);d.push(a.match(b))});return Promise.all(d).then(function(b){var d=g();b.forEach(function(b,e){if(b&&b.headers){var h=b.headers.get("x-o10n-sw");if(h){var k=b.headers.get("x-o10n-sw-expire");
if(k&&h&&h<g()-k){a["delete"](f[e]);return}}else h=d;!1!==c&&c.push({t:h,r:f[e]})}});c&&c.length>A&&(c.sort(function(a,b){return a.t>b.t?-1:a.t<b.t?1:0}),c.slice(A).forEach(function(b){a["delete"](b.r)}))})}})})}})).then(function(){y=!1}):Promise.resolve()}))}c.v=[];var M=/^\/(.*)\/([gimuy]+)?$/;CacheStorage.prototype.match||(CacheStorage.prototype.match=function(a,b){var c=this;return this.keys().then(function(d){var e;return d.reduce(function(f,d){return f.then(function(){return e||c.open(d).then(function(c){return c.match(a,
b)}).then(function(a){return e=a})})},Promise.resolve())})});var v="o10n"+(d[7]?":"+d[7]:""),w=RegExp("max-ages*=s*([0-9]+)","gi");c.l=function(){return caches.open(v+"")};var v="o10n"+(d[7]?":"+d[7]:""),A=d[8]?d[8]:1E3,z=!1,y=!1,H={1:function(a){var b=[];a.forEach(function(a){var c={};c.headers=new Headers;c.headers.append("x-o10n-sw-worker",1);var d=new Request(a,c);b.push(l(d).then(function(a){return a?a:N(d)}))});Promise.all(b).then(function(){(void 0)("preload","completed",a)})},2:function(c,
d,e,g){var h=g[29],f={};d&&d.length&&(f.headers=new Headers,d.forEach(function(a){a instanceof Array&&f.headers.append(a[0],a[1])}));f.headers.append("x-o10n-sw-worker",1);l(new Request(c,f)).then(function(d){f.cache="no-cache";d||(h=!1);h?e?(f.method="HEAD",e[0]&&f.headers.append("If-None-Match",e[0]),e[1]&&f.headers.append("If-Modified-Since",e[1])):(h=!1,f.method="GET"):f.method="GET";var k=new Request(c,f);a(k).then(function(d){var g=!1;if(304===d.status)return!1;if(h){if(e&&(e[0]||e[1])){if(!g&&
e[0]){var n=d.headers.get("etag");n&&n!==n&&(g=!0)}!g&&e[1]&&(d=b(d.headers.get("last-modified")))&&d!==parseInt(e[1])&&(g=!0)}else g=!0;return g?(f.method="GET",k=new Request(c,f),a(k)):!1}return d}).then(function(a){a&&m(k,a.clone(),g)})["catch"](function(){})})},3:function(){L()},4:function(b,d,e){function g(e){var f=new Request(d,e);a(f).then(function(a){if(304===a.status)c.postMessage([1,-1]);else{if("HEAD"===e.method)return e.method="GET",g(e);a.ok&&400>a.status&&a.text().then(function(d){c.postMessage([1,
b===d,a.headers.get("etag"),a.headers.get("last-modified")])})}})}var h={};h.headers=new Headers;h.headers.append("x-o10n-sw-worker",1);e&&(h.method="HEAD",e[0]&&h.headers.append("If-None-Match",e[0]),e[1]&&h.headers.append("If-Modified-Since",e[1]));g(h)}};c.addEventListener("message",function(a){var b=a?a.data:!1;b instanceof Array&&(a=b[0].toString(),b=b.slice(1)||[],a in H&&H[a].apply(this,b))})})(self,self.fetch,self.Cache,O10N_CONFIG);
