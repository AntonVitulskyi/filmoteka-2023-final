!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=r.parcelRequire7ffc;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},r.parcelRequire7ffc=i),i.register("iE7OH",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i("iE7OH").register(JSON.parse('{"2Y0K8":"library.7642b1bc.js","8DGjw":"empty_library.0c6c1564.jpg","2hvCh":"index.d2d1ccd7.js"}')),i("5UVnj"),i("5xtVg");var o,c=i("eZ7d6"),u=i("2TvXO"),s=i("dh4R1"),f=i("iU1Pc"),d=i("5xtVg");o=i("aNJCr").getBundleURL("2Y0K8")+i("iE7OH").resolve("8DGjw");var l=i("26uiw"),p=i("8LFkr"),v=document.querySelector(".watched"),h=document.querySelector(".queue"),g=document.querySelector(".header__bnt--watched"),_=document.querySelector(".header__bnt--queue"),m=new(0,s.default);function w(e,r,n){var a,i=localStorage.getItem(e),o=JSON.parse(i);n.innerHTML="",r.innerHTML="",i?o.forEach((a=t(c)(t(u).mark((function e(n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(n,r,m);case 1:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})):b(r),0===o.length&&b(r)}function b(e){var r=(0,l.default)(t(o));e.innerHTML=r}function E(e,t,r){return x.apply(this,arguments)}function x(){return(x=t(c)(t(u).mark((function e(r,n,a){var i,o,c,s,d,l,v,h;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.Loading.standard(),e.prev=1,e.next=4,a.getMovieById(r);case 4:i=e.sent,o=i.data,c=o.genres.map((function(e){return e.name})).join(", "),s=new Date(o.release_date).getFullYear()||"",d=o.poster_path?"https://image.tmdb.org/t/p/original/".concat(o.poster_path):"https://dummyimage.com/395x592/000/fff.jpg&text=MOVIE+POSTER+IS+NOT+DEFINED",l=o.vote_average.toFixed(1),v={id:o.id,img:d,title:o.title,genres:c,releaseDate:s,rating:l},h=(0,p.default)([v]),n.insertAdjacentHTML("beforeend",h),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.message);case 18:return e.prev=18,f.Loading.remove(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})))).apply(this,arguments)}g.addEventListener("click",(function(){g.classList.add("header__bnt--active"),_.classList.remove("header__bnt--active"),w(d.LISTNAME_TO_WATCH,v,h)})),_.addEventListener("click",(function(){_.classList.add("header__bnt--active"),g.classList.remove("header__bnt--active"),w(d.LISTNAME_TO_QUEUE,h,v)})),t(c)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(d.LISTNAME_TO_WATCH,v,h);case 1:case"end":return e.stop()}}),e)})))(),i("ghI91"),i("4F07H")}();
//# sourceMappingURL=library.7642b1bc.js.map