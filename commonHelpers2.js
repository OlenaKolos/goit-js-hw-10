import"./assets/styles-b3d93e42.js";import{i as n}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form");i.addEventListener("submit",o=>{o.preventDefault();const e=i.elements.delay.value,s=i.elements.state.value;a({value:e,delay:e,state:s}).then(t=>l("izi-check","#82C43C",`✅ Fulfilled promise in ${e}ms`)).catch(t=>l("izi-close-icon","#FC5A5A",`❌ Rejected promise in ${e}ms`))});const a=({value:o,delay:e,state:s})=>new Promise((t,r)=>{setTimeout(()=>{s==="fulfilled"?t(o):r(o)},e)}),l=(o,e,s)=>{n.show({position:"topCenter",iconColor:"#FAFAFB",icon:o,messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:e,close:!1,closeOnClick:!0,message:s})};
//# sourceMappingURL=commonHelpers2.js.map
