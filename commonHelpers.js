import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as C,i as x}from"./assets/vendor-651d7991.js";let o,s=document.querySelector("[data-start]");s.disabled=!0;const d=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]");let a;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e&&e>Date.now()?(o=e,s.disabled=!1,f()):(o=void 0,s.disabled=!0,x.error({message:"Please choose a date in the future",position:"topLeft"}))}};s.addEventListener("click",()=>{o&&T()});function f(){const t=o-Date.now();if(t>0){const{days:e,hours:r,minutes:i,seconds:c}=v(t);d.textContent=n(e),u.textContent=n(r),l.textContent=n(i),m.textContent=n(c)}else q()}function T(){a=setInterval(f,1e3)}function q(){clearInterval(a),d.textContent="00",u.textContent="00",l.textContent="00",m.textContent="00",a=null}function n(t){return String(t).padStart(2,"0")}function v(t){const y=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),D=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:h,minutes:p,seconds:D}}C("#datetime-picker",S);
//# sourceMappingURL=commonHelpers.js.map
