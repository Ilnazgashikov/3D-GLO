(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),a=e=>e<10?`0${e}`:e;let r,o=new Date("15 june 2024").getTime();const s=()=>{let e=(()=>{let e=(new Date).getTime(),t=(o-e)/1e3,n=Math.floor(t/60/60),l=Math.floor(t/60%60),r=Math.floor(t%60);return r=a(r),l=a(l),n=a(n),{timeRemaining:t,hours:n,minutes:l,seconds:r}})();t.textContent=e.hours,n.textContent=e.minutes,l.textContent=e.seconds,e.timeRemaining<=0&&(clearInterval(r),t.textContent="00",n.textContent="00",l.textContent="00")};r=setInterval(s,1e3),s()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),t.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||e.target.matches("li>a"))&&n()}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");t.style.transition="all .5s";const n=t.querySelector(".popup-content");n.style.transition="all .5s",n.style.position="absolute",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -30%)";const l=t.querySelector(".popup-close");e.forEach((e=>{e.addEventListener("click",(()=>{window.screen.width>=768?(t.style.display="block",setTimeout((()=>{n.style.transform="translate(-50%, -50%)",t.style.opacity="1"}),0)):(t.style.display="block",t.style.opacity="1",n.style.transform="translate(-50%, -50%)")}))})),l.addEventListener("click",(()=>{window.screen.width>=768?(n.style.transform="translate(-50%, -30%)",t.style.opacity="0",setTimeout((()=>{t.style.display="none"}),500)):t.style.display="none"}))})(),(()=>{const e=document.querySelectorAll('input[Placeholder="Ваше имя"]'),t=document.querySelector('input[Placeholder="Ваше сообщение"]'),n=document.querySelectorAll('input[Type="email"]'),l=document.querySelectorAll('input[Type="tel"]');document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я -]/g,"")}))})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я0-9 -]/g,"")})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9a-zA-Z@_.!~*'-]/g,"")}))})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()-]/g,"")}))}))})()})();