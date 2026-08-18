const loader=document.getElementById("loader");
const enter=document.getElementById("enterBtn");
const content=document.getElementById("siteContent");
window.addEventListener("load",()=>setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),600)},400));
enter.addEventListener("click",()=>{content.classList.remove("hidden");document.body.style.overflow="auto";content.scrollIntoView({behavior:"smooth"});});
