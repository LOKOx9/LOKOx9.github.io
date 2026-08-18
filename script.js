const loader=document.getElementById("loader"),enter=document.getElementById("enter"),site=document.getElementById("site");
window.addEventListener("load",()=>setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),700)},600));
enter.addEventListener("click",()=>{site.classList.remove("hidden");setTimeout(()=>site.scrollIntoView({behavior:"smooth"}),30)});
