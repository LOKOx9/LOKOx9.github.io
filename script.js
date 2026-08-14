const intro=document.getElementById("intro");
const video=document.getElementById("introVideo");
const skip=document.getElementById("skip");
const page=document.getElementById("site");
const progress=document.getElementById("loadingProgress");
const percent=document.getElementById("loadingPercent");
let entered=false;

function enterSite(){
  if(entered)return;
  entered=true;
  intro.style.transition="opacity .9s ease";
  intro.style.opacity="0";
  page.classList.add("show");
  setTimeout(()=>intro.remove(),950);
}
video.addEventListener("timeupdate",()=>{
  if(video.duration){
    const p=Math.min(100,(video.currentTime/video.duration)*100);
    progress.style.width=p+"%";
    percent.textContent=Math.round(p)+"%";
  }
});
video.addEventListener("ended",enterSite);
setTimeout(()=>{ if(!entered) enterSite(); },12000);
skip.addEventListener("click",enterSite);

document.getElementById("copyUid").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText("5177803934")}catch(e){}
  const toast=document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1700);
});
