(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),n=e=>e<10?`0${e}`:e;let a,r=new Date("25 june 2024").getTime();const c=()=>{let e=(()=>{let e=(new Date).getTime(),t=(r-e)/1e3,l=Math.floor(t/60/60),o=Math.floor(t/60%60),a=Math.floor(t%60);return a=n(a),o=n(o),l=n(l),{timeRemaining:t,hours:l,minutes:o,seconds:a}})();t.textContent=e.hours,l.textContent=e.minutes,o.textContent=e.seconds,e.timeRemaining<=0&&(clearInterval(a),t.textContent="00",l.textContent="00",o.textContent="00")};a=setInterval(c,1e3),c()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),t.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||e.target.matches("li>a"))&&l()}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");t.style.transition="all .5s";const l=t.querySelector(".popup-content");l.style.transition="all .5s",l.style.position="absolute",l.style.top="50%",l.style.left="50%",l.style.transform="translate(-50%, -30%)";const o=t.querySelector(".popup-close");e.forEach((e=>{e.addEventListener("click",(()=>{window.screen.width>=768?(t.style.display="block",setTimeout((()=>{l.style.transform="translate(-50%, -50%)",t.style.opacity="1"}),0)):(t.style.display="block",t.style.opacity="1",l.style.transform="translate(-50%, -50%)")}))})),o.addEventListener("click",(()=>{window.screen.width>=768?(l.style.transform="translate(-50%, -30%)",t.style.opacity="0",setTimeout((()=>{t.style.display="none"}),500)):t.style.display="none"}))})(),(()=>{const e=document.querySelectorAll('input[Placeholder="Ваше имя"]'),t=document.querySelector('input[Placeholder="Ваше сообщение"]'),l=document.querySelectorAll('input[Type="email"]'),o=document.querySelectorAll('input[Type="tel"]');document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я -]/g,"")}))})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я0-9 -]/g,"")})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9a-zA-Z@_.!~*'-]/g,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()-]/g,"")}))}))})(),(e=>{const t=document.querySelector(".portfolio-content"),l=document.querySelectorAll(".portfolio-item");let o,n=[],a=document.querySelector(".portfolio-dots"),r=0;(()=>{let e=document.createElement("li");a.appendChild(e),n.push(e),e.className="dot dot-active";for(let e=1;e<=l.length-1;e++){let e=document.createElement("li");e.className="dot",a.appendChild(e),n.push(e)}})();const c=(e,t,l)=>{e[t].classList.remove(l)},s=(e,t,l)=>{e[t].classList.add(l)},i=()=>{c(l,r,"portfolio-item-active"),c(n,r,"dot-active"),r++,r>=l.length&&(r=0),s(l,r,"portfolio-item-active"),s(n,r,"dot-active")},u=(e=1500)=>{o=setInterval(i,e)};u(2e3),t.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(l,r,"portfolio-item-active"),c(n,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&n.forEach(((t,l)=>{e.target===t&&(r=l)})),r>=l.length?r=0:r<0&&(r=l.length-1),s(l,r,"portfolio-item-active"),s(n,r,"dot-active"))})),t.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(o)}),!0),t.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&u(2e3)}),!0)})(),((e=100)=>{const t=document.querySelector(".calc-block"),l=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),r=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==l&&t.target!==o&&t.target!==n&&t.target!==a||(()=>{let t;const c=l.options[l.selectedIndex].value,s=o.value;let i=0,u=1,d=1;n.value>1&&(u+=+n.value/10),a.value&&a.value<5?d=2:a.value&&a.value<10&&(d=1.5),i=l.value&&o.value?e*c*s*u*d:0;let m=0,p=Math.floor(i/100);t=setInterval((()=>{i-m<150?(r.textContent=i,clearInterval(t)):m<i?(m+=p,r.textContent=m):clearInterval(t)}),1)})()}))})(100)})();