import"./assets/styles-b3d93e42.js";import{f as m}from"./assets/vendor-651d7991.js";const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){S(e)}},y=m("#datetime-picker",h);document.querySelector("[data-start]").addEventListener("click",D);r();function S(e){e[0]<new Date?(f("Please choose a date in the future"),r()):p()}function D(){let e=y.selectedDates[0];const t=Date.now();if(!e||e<t){f("Please choose a valid future date");return}let n=e-t,o;function s(){const{days:c,hours:u,minutes:i,seconds:d}=w(n);if(a("[data-days]",c),a("[data-hours]",u),a("[data-minutes]",i),a("[data-seconds]",d),n<=0){clearInterval(o),M("Countdown timer has reached the end date."),r();return}n-=1e3,n<=0&&(clearInterval(o),r())}s(),o=setInterval(s,1e3)}function r(){l(!0)}function p(){l(!1)}function l(e){document.querySelector("[data-start]").disabled=e}function f(e){iziToast.error({title:"Error",message:e})}function M(e){iziToast.success({title:"Success",message:e})}function w(e){const c=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:i,seconds:d}}function a(e,t){document.querySelector(e).textContent=I(t)}function I(e){return e<10?`0${e}`:e}
//# sourceMappingURL=commonHelpers.js.map
