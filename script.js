const loader=document.getElementById("loader"),enter=document.getElementById("enter"),content=document.getElementById("content");
window.addEventListener("load",()=>setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),700)},700));
enter.addEventListener("click",()=>{content.classList.remove("hidden");setTimeout(()=>content.scrollIntoView({behavior:"smooth"}),40)});
const glow=document.querySelector(".cursor-glow");window.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});
