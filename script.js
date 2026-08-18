const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),700)},500));

const audio=document.getElementById("bgAudio");
const soundBtn=document.getElementById("soundBtn");
let playing=false;

soundBtn.addEventListener("click",async()=>{
  try{
    if(!playing){await audio.play();playing=true;soundBtn.textContent="🔊";}
    else{audio.pause();playing=false;soundBtn.textContent="🔇";}
  }catch(e){
    alert("ضع ملف audio/calm.mp3 أولاً، ثم اضغط زر الصوت.");
  }
});
