!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){(()=>{const e=document.getElementById("sidebar"),t=document.getElementById("header"),n=document.getElementById("menuOpen"),i=document.getElementById("menuClose"),o=document.getElementById("callbackModal"),c=document.querySelectorAll('[data-id="callbackModal"]'),r=document.getElementById("orderModal"),l=document.querySelectorAll('[data-id="orderModal"]'),a=document.getElementById("callbackSuccess"),s=document.querySelectorAll('[data-id="callbackSuccess"]'),d=document.getElementById("orderForm"),u=document.getElementById("callbackForm");d&&d.addEventListener("submit",function(e){e.preventDefault(),r.classList.remove("active"),setTimeout(()=>{a.classList.add("active")},250)}),u&&u.addEventListener("submit",function(e){e.preventDefault(),o.classList.remove("active"),setTimeout(()=>{a.classList.add("active")},250)}),c&&o&&(c.forEach(e=>{e.addEventListener("click",function(){o.classList.toggle("active")})}),o.addEventListener("click",function(e){e.target===this&&o.classList.remove("active")})),l&&r&&(l.forEach(e=>{e.addEventListener("click",function(){r.classList.toggle("active")})}),r.addEventListener("click",function(e){e.target===this&&r.classList.remove("active")})),s&&a&&(s.forEach(e=>{e.addEventListener("click",function(){a.classList.toggle("active")})}),a.addEventListener("click",function(e){e.target===this&&a.classList.remove("active")})),window.addEventListener("scroll",function(e){window.scrollY>0&&window.innerWidth>=1915?t.classList.add("scrolled"):t.classList.remove("scrolled")}),e&&t&&n&&i&&(n.addEventListener("click",function(t){e.classList.add("active")}),i.addEventListener("click",function(t){e.classList.remove("active")}),e.addEventListener("click",function(t){t.target===this&&e.classList.remove("active")}))})(),(()=>{try{const e=document.getElementById("featuresSwiper");if(e){const t=new Swiper(e,{slidesPerView:1,spaceBetween:10,loop:!0,pagination:{el:"#featuresSwiper .swiper-pagination",type:"bullets",clickable:!0},on:{init:function(){console.log("swiper initialized")}}});window.innerWidth>=640&&t.destroy(!0,!0)}}catch(e){console.log("handle error",e)}})(),(()=>{try{const e=document.getElementById("publicationsSwiper");e&&new Swiper(e,{slidesPerView:1,spaceBetween:10,breakpoints:{1020:{slidesPerView:2,spaceBetween:15}},pagination:{el:".publications__bottom .swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".publications__bottom .swiper-button-next",prevEl:".publications__bottom .swiper-button-prev"},on:{init:function(){console.log("swiper initialized")}}})}catch(e){console.log("handle error",e)}})()}]);