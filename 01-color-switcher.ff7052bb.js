!function(){let t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{e.disable=!0,t=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),a.addEventListener("click",(()=>{e.disable=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.ff7052bb.js.map
