import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-651d7991.js";function n(s,t){s==="fulfilled"?o.show({title:"✅ Fulfilled promise",message:`in ${t}ms`,position:"topLeft"}):o.show({title:"❌ Rejected promise",message:`in ${t}ms`,position:"topLeft"})}document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const t=this.elements.delay,l=this.elements.state,i=parseInt(t.value),a=l.value;new Promise((e,m)=>{setTimeout(()=>{a==="fulfilled"?e(i):m(i)},i)}).then(e=>{n("fulfilled",e)}).catch(e=>{n("rejected",e)})});
//# sourceMappingURL=commonHelpers2.js.map
