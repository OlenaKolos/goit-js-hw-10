import{i as u}from"./assets/vendor-32231325.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".form");l.addEventListener("submit",r=>{r.preventDefault();const o=l.elements.delay.value,s=l.elements.state.value;a({value:o,delay:o,state:s}).then(i=>c("izi-check","#82C43C",`Fulfilled promise in ${o}ms`)).catch(i=>c("izi-close-icon","#FC5A5A",`Rejected promise in ${o}ms`))});const a=({value:r,delay:o,state:s})=>new Promise((i,e)=>{setTimeout(()=>{s==="fulfilled"?i(r):e(r)},o)}),c=(r,o,s)=>{u.show({position:"topCenter",iconColor:"#FAFAFB",icon:r,messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:o,close:!1,closeOnClick:!0,message:s})};
//# sourceMappingURL=commonHelpers.js.map
