var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector(".form"),l=r.querySelector("button"),{delay:u,step:a,amount:s}=r.elements;function d({position:e,delay:o}){i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function f({position:e,delay:o}){i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}r.addEventListener("submit",(function(e){e.preventDefault();let o=Number(u.value);const t=Number(a.value),n=Number(s.value);l.disabled=!0,setTimeout((()=>{l.disabled=!1}),(n-1)*t+o),Array(Number(n)).fill(null).forEach(((e,n)=>{var i,r;(i=n+1,r=o,new Promise(((e,o)=>{const t=Math.random()>.3;setTimeout((()=>{t?e({position:i,delay:r}):o({position:i,delay:r})}),r)}))).then(d).catch(f),o+=t}))}));
//# sourceMappingURL=03-promises.b1090e2c.js.map